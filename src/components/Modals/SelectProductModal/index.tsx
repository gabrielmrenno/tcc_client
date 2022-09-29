import React from 'react';
import { InputIcon } from '../../Form/InputIcon';
import {
    BackgroundContainer,
    Container,
    SearchCustomer,
    HeaderContainer,
    SearchText,
    CloseIcon
} from './styles';

interface SelectProductModalProps {
    closeModal: () => void;
}

export function SelectProductModal({ closeModal }: SelectProductModalProps) {
    return (
        <>
            <BackgroundContainer />
            <Container>
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
                <InputIcon
                    // value={search}
                    nameIcon="search"
                    placeholder="Nome fantasia"
                // onChangeText={(text: string) => setSearch(text)}
                />

            </Container>
        </>
    );
}