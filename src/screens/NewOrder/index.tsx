import React, { useState } from "react";
import { View, Modal, FlatList } from 'react-native';

import { OrderProductModel } from "../../types/Models/OrderProductModel";

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
    const [listOfProducts, setListOfProducts] = useState<OrderProductModel[]>([] as OrderProductModel[]);

    const weights = listOfProducts.map((current) => current.totalWeight);
    const totalWeight = weights.reduce((current, acc) => acc += current, 0);

    const prices = listOfProducts.map((current) => current.totalPrice);
    const totalPrice = prices.reduce((current, acc) => acc += current, 0);

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
                    keyExtractor={(item) => item.product.id}
                    renderItem={({ item }) => <ProductCard product={item} />}
                />
            </Container>

            {(!!selectedCustomer && Object.keys(listOfProducts).length !== 0) && <FooterResults>
                <Line>
                    <Description>Peso Total:</Description>
                    <Description>{totalWeight.toFixed(0)} Kg</Description>
                </Line>
                <Line>
                    <Description>Valor total:</Description>
                    <Description>R$ {totalPrice.toFixed(2)}</Description>
                </Line>
                <FinishOrder onPress={() => console.log("Finalizar Pedido")}>
                    <Icon name="shopping-cart" />
                    <FinishOrderText>Finalizar Pedido</FinishOrderText>
                </FinishOrder>
            </FooterResults>}

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