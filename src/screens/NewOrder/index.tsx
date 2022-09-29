import React, { useState } from "react";
import { View, Text, Modal } from 'react-native';
import { Customer, SelectCustomerModal } from "../../components/Modals/SelectCustomerModal";
import { TitlePlus } from "../../components/ScreenComponents/TitlePlus";
import { CustomerCard } from "../../components/ScreenComponents/CustomerCard"
import {
    Container,
    HeaderTitle,
    FooterResults,
} from './styles';
import { SelectProductModal } from "../../components/Modals/SelectProductModal";

export function NewOrder() {
    const [openSetCustomerModal, setOpenSetCustomerModal] = useState(false);
    const [openSetProductModal, setOpenSetProductModal] = useState(false);

    const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
    const [selectedProduct, setSelectedProduct] = useState('');

    function handleOpenSetCustomerModal() {
        setOpenSetCustomerModal(true);
    }
    function handleCloseSetCustomerModal() {
        setOpenSetCustomerModal(false);
    }

    function handleOpenSetProductModal() {
        setOpenSetProductModal(true);
    }
    function handleCloseSetProductModal() {
        setOpenSetProductModal(false);
    }

    return (
        <>
            <Container>
                <HeaderTitle>
                    Novo Pedido
                </HeaderTitle>
                <View>
                    {!!selectedCustomer
                        ? <CustomerCard customer={selectedCustomer} />
                        : <TitlePlus
                            title="Selecionar Cliente"
                            onPress={handleOpenSetCustomerModal}
                        />}
                </View>

                <View>
                    <TitlePlus title="Lista de Produtos" onPress={() => handleOpenSetProductModal()} />
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

            <Modal
                transparent={true}
                presentationStyle="overFullScreen"
                visible={openSetProductModal}
            >
                <SelectProductModal
                    closeModal={handleCloseSetProductModal}
                // setSelectedProduct={setSelectedProduct}
                />
            </Modal>
        </>
    );
}