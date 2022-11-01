import React from 'react';
import { View } from 'react-native';
import { StyledButton } from '../../Form/StyledButton';

import {
    ModalContainer,
    BackgroundContainer,
    Container,
    HeaderContainer,
    CloseIcon,
    SearchText,
    Content,
    ContentText,
    Footer,
    ButtonContainer
} from './styles';

interface DeleteModalProps {
    deleteMode: "produto" | "cliente";
    closeModal: () => void;
}

export function DeleteModal({
    closeModal,
    deleteMode
}: DeleteModalProps) {
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
                    <ContentText>Deseja remover o {deleteMode} "NOME" do pedido?</ContentText>
                </Content>
                <Footer>
                    <ButtonContainer>
                        <StyledButton
                            title='Cancelar'
                            onPress={() => console.log("Removeu1")}
                            reverseColor
                        />
                    </ButtonContainer>
                    <ButtonContainer>
                        <StyledButton
                            title='Remover'
                            onPress={() => console.log("Removeu2")}
                        />
                    </ButtonContainer>
                </Footer>
            </Container>
        </ModalContainer>
    );
}