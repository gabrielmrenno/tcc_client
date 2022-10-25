import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import uuid from 'react-native-uuid';

import { ProductsModel } from '../../../types/Models/ProductsModel';
import { OrderProductModel } from "../../../types/Models/OrderProductModel";
import { api } from '../../../services/api';

import { InputIcon } from '../../Form/InputIcon';

import { StyledButton } from '../../Form/StyledButton';
import {
    ModalContainer,
    BackgroundContainer,
    Container,
    SearchProducts,
    HeaderContainer,
    SearchText,
    CloseIcon,
    Content,
    DropdownProducts,
    DetailsContainer,
    InputContainer,
    ProductDetailsContainer,
    ProductDetails,
    Label,
    Value,
} from './styles';

interface SelectProductModalProps {
    closeModal: () => void;
    selectedProduct: OrderProductModel;
    setSelectedProduct: (product: OrderProductModel) => void;
    listOfProducts: OrderProductModel[];
    setListOfProducts: (orderProduct: OrderProductModel[]) => void;
}

export function SelectProductModal({
    closeModal,
    selectedProduct,
    setSelectedProduct,
    listOfProducts,
    setListOfProducts
}: SelectProductModalProps) {
    const [products, setProducts] = useState<ProductsModel[]>([] as ProductsModel[]);
    const [product, setProduct] = useState<ProductsModel>({} as ProductsModel);
    const [discountString, setDiscountString] = useState('');
    const [quantityString, setQuantityString] = useState('');

    const discount = Number(discountString);
    const quantity = Number(quantityString);

    const mode = selectedProduct.product ? 'Editar' : 'Adicionar';

    const normalFilteredProducts = products.filter(item => {
        return listOfProducts.every(list => {
            if (list.product) {
                return item.id !== list.product.id
            } else {
                return item;
            }
        })
    });

    const editedFilteredProducts = [...normalFilteredProducts, selectedProduct.product];

    const filteredProducts = selectedProduct.product ? editedFilteredProducts : normalFilteredProducts;

    const showedProduct = selectedProduct.product ? selectedProduct.product : product;

    const discountValue = discount ? 1 - (discount / 100) : 1;
    const productValue = showedProduct.preco * discountValue;
    const totalValue = (showedProduct.preco * quantity) * discountValue;



    function handleCloseButtonPressed() {
        setSelectedProduct({} as OrderProductModel);
        closeModal();
    }

    function handleSubmitButtonPressed(mode: 'Editar' | 'Adicionar') {
        if (mode === 'Adicionar') {
            setListOfProducts([
                ...listOfProducts,
                {
                    id: uuid.v4(),
                    product,
                    discount,
                    quantity,
                    totalPrice: (product.preco * quantity) * (1 - discount / 100),
                    totalWeight: (product.peso * quantity),
                }
            ]);
        } if (mode === 'Editar') {
            const newListOfProducts = listOfProducts.map(product => {
                if (product.id === selectedProduct.id) {
                    return {
                        id: product.id,
                        product: selectedProduct.product,
                        discount,
                        quantity,
                        totalPrice: (selectedProduct.product.preco * quantity) * (1 - discount / 100),
                        totalWeight: (selectedProduct.product.peso * quantity),
                    }
                }
                return product;
            });
            setListOfProducts(newListOfProducts);
        }
        setSelectedProduct({} as OrderProductModel);
        closeModal();
    }

    useEffect(() => {
        api.get("/produtos")
            .then((response) => {
                setProducts(response.data);
            });
        if (mode === 'Editar') {
            setDiscountString(String(selectedProduct.discount));
            setQuantityString(String(selectedProduct.quantity));
        }
    }, []);

    return (
        <ModalContainer >
            <BackgroundContainer
                onPress={() => closeModal()}
            />
            <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <SearchProducts>
                    <HeaderContainer>
                        <SearchText>
                            {mode} Produto
                        </SearchText>
                        <CloseIcon
                            name="x"
                            onPress={() => handleCloseButtonPressed()}
                        />
                    </HeaderContainer>
                </SearchProducts>
                <Content>
                    <DropdownProducts
                        data={filteredProducts}
                        value={showedProduct}
                        labelField="nome"
                        valueField="nome"
                        onChange={(item: ProductsModel) => setProduct(item)}
                        placeholder={'Selecione o produto'}
                    />
                    <DetailsContainer>
                        <InputContainer>
                            <InputIcon
                                title='Quantidade'
                                placeholder='0'
                                keyboardType='numeric'
                                value={quantityString}
                                onChangeText={(text: string) => setQuantityString(text)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputIcon
                                title='Desconto'
                                placeholder='10%'
                                keyboardType='numeric'
                                value={discountString}
                                onChangeText={(text: string) => setDiscountString(text)}
                            />
                        </InputContainer>
                    </DetailsContainer>


                </Content>
                {(showedProduct.id) && <ProductDetailsContainer>
                    <ProductDetails>
                        <Label>Valor unitário:</Label>
                        <Value>R$ {productValue.toFixed(2)}</Value>
                    </ProductDetails>
                    <ProductDetails>
                        <Label>Valor total:</Label>
                        <Value>R$ {totalValue.toFixed(2)}</Value>
                    </ProductDetails>
                </ProductDetailsContainer>}

                <StyledButton
                    style={{ marginBottom: 20 }}
                    title={`${mode} produto`}
                    onPress={() => handleSubmitButtonPressed(mode)}
                    enabled={!!showedProduct.id && !!quantity}
                />

            </Container>
        </ModalContainer>
    );
}