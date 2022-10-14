import React from 'react';
import { Platform } from 'react-native';

import { InputIcon } from '../../Form/InputIcon';
import { StyledButton } from '../../Form/StyledButton';
import {
    ModalContainer,
    BackgroundContainer,
    Container,
    SearchCustomer,
    HeaderContainer,
    SearchText,
    CloseIcon,
    Content,
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

export function SelectProductModal({ closeModal }: SelectProductModalProps) {
    return (
        <ModalContainer >
            <BackgroundContainer />
            <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <SearchCustomer>
                    <HeaderContainer>
                        <SearchText>
                            Adicionar Produto
                        </SearchText>
                        <CloseIcon
                            name="x"
                            onPress={() => closeModal()}
                        />
                    </HeaderContainer>
                </SearchCustomer>
                <Content>
                    <InputIcon
                        // value={search}
                        nameIcon="search"
                        placeholder="Nome fantasia"
                    // onChangeText={(text: string) => setSearch(text)}
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
                <ProductDetailsContainer>
                    <ProductDetails>
                        <Label>Valor unitário:</Label>
                        <Value>R$ 40,00</Value>
                    </ProductDetails>
                    <ProductDetails>
                        <Label>Valor total:</Label>
                        <Value>R$ 200,00</Value>
                    </ProductDetails>
                </ProductDetailsContainer>

                <StyledButton
                    style={{ marginBottom: 20 }}
                    title='Adicionar produto'
                    onPress={() => console.log("Clicado")}
                />

            </Container>
        </ModalContainer>
    );
}