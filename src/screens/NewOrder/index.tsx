import React, { useState } from "react";
import { View, Modal, FlatList } from 'react-native';

import { OrderProductDTO } from "../../types/DTOs/OrderProductDTO";

import { ProductCard } from "../../components/ScreenComponents/ProductCard";
import { Customer, SelectCustomerModal } from "../../components/Modals/SelectCustomerModal";
import { TitlePlus } from "../../components/ScreenComponents/TitlePlus";
import { CustomerCard } from "../../components/ScreenComponents/CustomerCard";

import { SelectProductModal } from "../../components/Modals/SelectProductModal";
import {
    Container,
    HeaderTitle,
    ProductList,
    FooterResults,
    Line,
    Description,
    FinishOrder,
    Icon,
    FinishOrderText,
} from './styles';



export function NewOrder() {
    const [openSetCustomerModal, setOpenSetCustomerModal] = useState(false);
    const [openSetProductModal, setOpenSetProductModal] = useState(false);

    const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
    const [listOfProducts, setListOfProducts] = useState<OrderProductDTO[]>([] as OrderProductDTO[]);

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

                <ProductList
                    data={listOfProducts}
                    keyExtractor={(item) => item.produto.id}
                    renderItem={({ item }) => <ProductCard product={item} />}
                />
            </Container>

            <FooterResults>
                <Line>
                    <Description>Peso Total:</Description>
                    <Description>12 Kg</Description>
                </Line>
                <Line>
                    <Description>Valor total:</Description>
                    <Description>R$ 1000,00</Description>
                </Line>
                <FinishOrder onPress={() => console.log("Finalizar Pedido")}>
                    <Icon name="shopping-cart" />
                    <FinishOrderText>Finalizar Pedido</FinishOrderText>
                </FinishOrder>
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
                    listOfProducts={listOfProducts}
                    setListOfProducts={setListOfProducts}
                />
            </Modal>
        </>
    );
}