import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
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
}

interface ProductsDTO {
    "createdAt": string,
    "grupo": string,
    "id": string,
    "nome": string,
    "peso": number,
    "preco": number,
    "unidade": string,
    "updatedAt": string,
}

export function SelectProductModal({ closeModal }: SelectProductModalProps) {
    const [products, setProducts] = useState<ProductsDTO[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductsDTO>();

    useEffect(() => {
        api.get("/produtos")
            .then((response) => {
                setProducts(response.data);
            });
    }, [])

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
                        onChange={(item: ProductsDTO) => setSelectedProduct(item)}
                        placeholder={'Selecione o produto'}
                    />
                    <DetailsContainer>
                        <InputContainer>
                            <InputIcon
                                title='Quantidade'
                                placeholder='0'
                                keyboardType='numeric'
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputIcon
                                title='Desconto'
                                placeholder='10%'
                                keyboardType='numeric'
                            />
                        </InputContainer>
                    </DetailsContainer>


                </Content>
                {selectedProduct && <ProductDetailsContainer>
                    <ProductDetails>
                        <Label>Valor unitário:</Label>
                        <Value>R$ {selectedProduct.preco}</Value>
                    </ProductDetails>
                    <ProductDetails>
                        <Label>Valor total:</Label>
                        <Value>R$ {selectedProduct.preco * 10}</Value>
                    </ProductDetails>
                </ProductDetailsContainer>}

                <StyledButton
                    style={{ marginBottom: 20 }}
                    title='Adicionar produto'
                    onPress={() => console.log("Clicado")}
                />

            </Container>
        </ModalContainer>
    );
}