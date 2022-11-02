import React from 'react';
import { StyledButton } from '../../Form/StyledButton';

import { CustomerModel } from '../../../types/Models/CustomerModal';
import { OrderProductModel } from '../../../types/Models/OrderProductModel';

import {
    ModalContainer,
    BackgroundContainer,
    Container,
    HeaderContainer,
    CloseIcon,
    SearchText,
    Content,
    ContentText,
    HighlightText,
    Footer,
    ButtonContainer
} from './styles';

interface DeleteModalProps {
    deleteMode: "produto" | "cliente";
    product: OrderProductModel;
    customer: CustomerModel;
    listOfProducts: OrderProductModel[];
    closeModal: () => void;
    setSelectedProduct: (product: OrderProductModel) => void;
    setSelectedCustomer: (customer: CustomerModel) => void;
    setListOfProducts: (product: OrderProductModel[]) => void;
}

export function DeleteModal({
    deleteMode,
    product,
    customer,
    listOfProducts,
    closeModal,
    setSelectedProduct,
    setSelectedCustomer,
    setListOfProducts

}: DeleteModalProps) {
    const name = deleteMode === "produto" ? product.product.nome : customer.nome;

    function handleOnPressCancelButton() {
        setSelectedProduct({} as OrderProductModel);
        closeModal();
    }

    function handleOnPressDeleteButton() {
        setSelectedProduct({} as OrderProductModel);
        closeModal();

        if (deleteMode === "cliente") {
            setSelectedCustomer({} as CustomerModel);
        } else {
            const newListOfProducts = listOfProducts.filter(eachProduct => eachProduct.id !== product.id)
            setListOfProducts(newListOfProducts);
        }
    }

    return (
        <ModalContainer>
            <BackgroundContainer
                onPress={() => closeModal()}
            />
            <Container>
                <HeaderContainer>
                    <SearchText>Deletar {deleteMode}</SearchText>
                    <CloseIcon
                        name="x"
                        onPress={() => closeModal()}
                    />
                </HeaderContainer>
                <Content>
                    <ContentText>Deseja remover o {deleteMode} <HighlightText>{name}</HighlightText> do pedido?</ContentText>
                </Content>
                <Footer>
                    <ButtonContainer>
                        <StyledButton
                            title='Cancelar'
                            onPress={() => handleOnPressCancelButton()}
                            reverseColor
                        />
                    </ButtonContainer>
                    <ButtonContainer>
                        <StyledButton
                            title='Remover'
                            onPress={() => handleOnPressDeleteButton()}
                        />
                    </ButtonContainer>
                </Footer>
            </Container>
        </ModalContainer>
    );
}