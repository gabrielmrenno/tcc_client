import React, { useState } from "react";
import { View, Text, Modal } from 'react-native';
import { SelectCustomerModal } from "../../components/Modals/SelectCustomerModal";
import { TitlePlus } from "../../components/ScreenComponents/TitlePlus";
import {
    Container,
    HeaderTitle,
    FooterResults,
} from './styles';

export function NewOrder() {
    const [customer, setCustomer] = useState(false);
    const [openSetCustomerModal, setOpenSetCustomerModal] = useState(false);

    function handleOpenSetCustomerModal() {
        setOpenSetCustomerModal(true);
    }
    function handleCloseSetCustomerModal() {
        setOpenSetCustomerModal(false);
    }

    return (
        <>
            <Container>
                <HeaderTitle>
                    Novo Pedido
                </HeaderTitle>
                <View>
                    {customer
                        ? <View>
                            <Text>Info Cliente</Text>
                        </View>
                        : <TitlePlus
                            title="Selecionar Cliente"
                            onPress={handleOpenSetCustomerModal}
                        />}
                </View>

                <View>
                    <TitlePlus title="Lista de Produtos" onPress={handleOpenSetCustomerModal} />
                </View>
            </Container>
            <FooterResults>
                <Text>Teste</Text>
            </FooterResults>

            <Modal
                transparent={true}
                presentationStyle="overFullScreen"
                visible={openSetCustomerModal}
            >
                <SelectCustomerModal onPress={handleCloseSetCustomerModal} />
            </Modal>
        </>
    );
}