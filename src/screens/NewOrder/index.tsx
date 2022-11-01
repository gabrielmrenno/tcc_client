import React, { useState } from "react";
import { View, Modal } from 'react-native';

import { OrderProductModel } from "../../types/Models/OrderProductModel";
import { CustomerModel } from "../../types/Models/CustomerModal";

import { ProductCard } from "../../components/ScreenComponents/ProductCard";
import { TitlePlus } from "../../components/ScreenComponents/TitlePlus";
import { CustomerCard } from "../../components/ScreenComponents/CustomerCard";

import { SelectCustomerModal } from "../../components/Modals/SelectCustomerModal";
import { SelectProductModal } from "../../components/Modals/SelectProductModal";
import { DeleteModal } from "../../components/Modals/DeleteModal";

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
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const [selectedCustomer, setSelectedCustomer] = useState<CustomerModel>();
    const [selectedProduct, setSelectedProduct] = useState<OrderProductModel>({} as OrderProductModel);
    const [listOfProducts, setListOfProducts] = useState<OrderProductModel[]>([] as OrderProductModel[]);

    const [deleteMode, setDeleteMode] = useState<("cliente" | "produto")>("cliente");

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

    function handleOpenDeleteModal() {
        setOpenDeleteModal(true);
    }
    function handleCloseDeleteModal() {
        setOpenDeleteModal(false);
    }

    return (
        <>
            <Container>
                <HeaderTitle>
                    Novo Pedido
                </HeaderTitle>
                <View>
                    {!!selectedCustomer
                        ? <CustomerCard
                            customer={selectedCustomer}
                            setDeleteMode={setDeleteMode}
                            handleOpenSetCustomerModal={handleOpenSetCustomerModal}
                            handleOpenDeleteModal={handleOpenDeleteModal}
                        />
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
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) =>
                        <ProductCard
                            product={item}
                            setDeleteMode={setDeleteMode}
                            setSelectedProduct={setSelectedProduct}
                            handleOpenSetProductModal={handleOpenSetProductModal}
                            handleOpenDeleteModal={handleOpenDeleteModal}
                        />}
                />
            </Container>

            {(!!selectedCustomer && listOfProducts.length !== 0) && <FooterResults>
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
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    listOfProducts={listOfProducts}
                    setListOfProducts={setListOfProducts}
                />
            </Modal>

            <Modal
                transparent={true}
                presentationStyle="overFullScreen"
                visible={openDeleteModal}
            >
                <DeleteModal
                    closeModal={handleCloseDeleteModal}
                    deleteMode={deleteMode}
                // selectedProduct={selectedProduct}
                // setSelectedProduct={setSelectedProduct}
                // listOfProducts={listOfProducts}
                // setListOfProducts={setListOfProducts}
                />
            </Modal>
        </>
    );
}