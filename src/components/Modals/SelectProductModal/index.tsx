import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';

import { ProductsDTO } from '../../../types/DTOs/ProductsDTO';
import { OrderProductDTO } from "../../../types/DTOs/OrderProductDTO";
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
    listOfProducts: OrderProductDTO[];
    setListOfProducts: (orderProduct: OrderProductDTO[]) => void;
}

export function SelectProductModal({
    closeModal,
    listOfProducts,
    setListOfProducts
}: SelectProductModalProps) {
    const [products, setProducts] = useState<ProductsDTO[]>([] as ProductsDTO[]);
    const [product, setProduct] = useState<ProductsDTO>({} as ProductsDTO);
    const [discount, setDiscount] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const discountValue = discount ? 1 - (discount / 100) : 1;
    const productValue = product.preco * discountValue;
    const totalValue = (product.preco * quantity) * discountValue;

    function handleButtonPressed() {
        setListOfProducts([
            ...listOfProducts,
            {
                product,
                discount,
                quantity,
                totalPrice: (product.preco * quantity) * (1 - discount / 100),
                totalWeight: (product.peso * quantity),
            }
        ]);
        closeModal();
    }

    useEffect(() => {
        api.get("/produtos")
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

    return (
        <ModalContainer >
            <BackgroundContainer />
            <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <SearchProducts>
                    <HeaderContainer>
                        <SearchText>
                            Adicionar Produto
                        </SearchText>
                        <CloseIcon
                            name="x"
                            onPress={() => closeModal()}
                        />
                    </HeaderContainer>
                </SearchProducts>
                <Content>
                    <DropdownProducts
                        data={products}
                        labelField="nome"
                        valueField="nome"
                        onChange={(item: ProductsDTO) => setProduct(item)}
                        placeholder={'Selecione o produto'}
                    />
                    <DetailsContainer>
                        <InputContainer>
                            <InputIcon
                                title='Quantidade'
                                placeholder='0'
                                keyboardType='numeric'
                                value={String(quantity)}
                                onChangeText={(text: string) => setQuantity(Number(text))}
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputIcon
                                title='Desconto'
                                placeholder='10%'
                                keyboardType='numeric'
                                value={String(discount)}
                                onChangeText={(text: string) => setDiscount(Number(text))}
                            />
                        </InputContainer>
                    </DetailsContainer>


                </Content>
                {(Object.keys(product).length !== 0) && <ProductDetailsContainer>
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
                    title='Adicionar produto'
                    onPress={() => handleButtonPressed()}
                    enabled={(Object.keys(product).length !== 0 && !!quantity)}
                />

            </Container>
        </ModalContainer>
    );
}