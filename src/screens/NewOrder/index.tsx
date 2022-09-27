import React, { useState } from "react";
import { View, Text, Modal } from 'react-native';
import { Customer, SelectCustomerModal } from "../../components/Modals/SelectCustomerModal";
import { TitlePlus } from "../../components/ScreenComponents/TitlePlus";
import {
    Container,
    HeaderTitle,
    FooterResults,
} from './styles';

export function NewOrder() {
    const [openSetCustomerModal, setOpenSetCustomerModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer>();

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
                    {!!selectedCustomer
                        ? <View>
                            <Text>{selectedCustomer.nome}</Text>
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
                <SelectCustomerModal
                    closeModal={handleCloseSetCustomerModal}
                    selectedCustomer={selectedCustomer}
                    setSelectedCustomer={setSelectedCustomer}
                />
            </Modal>
        </>
    );
}