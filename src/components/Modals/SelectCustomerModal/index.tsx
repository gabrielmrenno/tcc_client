import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { api } from "../../../services/api";
import { CustomerModel } from "../../../types/Models/CustomerModal";

import { InputIcon } from "../../Form/InputIcon";
import { StyledButton } from "../../Form/StyledButton";
import { Card } from "../../ScreenComponents/Card";

import {
    Container,
    SearchText,
    SearchCustomer,
    Footer,
    BackgroundContainer,
    HeaderContainer,
    CloseIcon,
} from "./styles";

interface SelectCustomerModalProps {
    closeModal: () => void;
    selectedCustomer: CustomerModel | undefined;
    setSelectedCustomer: (customer: CustomerModel) => void;
}


export function SelectCustomerModal({
    closeModal,
    selectedCustomer,
    setSelectedCustomer
}: SelectCustomerModalProps) {
    const [customers, setCustomers] = useState<CustomerModel[]>([] as CustomerModel[]);
    const [activeCustomer, setActiveCustomer] = useState<CustomerModel>();

    const mode = selectedCustomer?.id ? 'Editar' : 'Adicionar';

    const [search, setSearch] = useState("");

    const filteredCustomer = search.length > 0
        ? customers.filter(customer => customer.nome.includes(search))
        : customers;

    useEffect(() => {
        api.get("/clients")
            .then((response) => {
                setCustomers(response.data);
            });
        if (mode === 'Editar') {
            setActiveCustomer(selectedCustomer);
        }
    }, [])

    function handleSelectCustomer(item: CustomerModel) {
        setSelectedCustomer(item);
    }
    function handleSelectActiveCustomer(item: CustomerModel) {
        setActiveCustomer(item);
    }

    return (
        <>
            <BackgroundContainer
                onPress={() => closeModal()}
            />
            <Container>
                <SearchCustomer>
                    <HeaderContainer>
                        <SearchText>
                            {mode} Cliente
                        </SearchText>
                        <CloseIcon
                            name="x"
                            onPress={() => closeModal()}
                        />
                    </HeaderContainer>
                    <InputIcon
                        value={search}
                        nameIcon="search"
                        placeholder="Nome fantasia"
                        onChangeText={(text: string) => setSearch(text)}
                    />
                </SearchCustomer>
                <FlatList
                    data={filteredCustomer}
                    style={{}}
                    keyExtractor={(customer) => customer.id}
                    renderItem={
                        ({ item }) =>
                            <Card
                                active={!!activeCustomer && activeCustomer?.id === item.id}
                                key={item.id}
                                name={item.nome}
                                city={item.cidade}
                                phoneNumber={item.telefone}
                                discount={item.desconto}
                                onPress={() => handleSelectActiveCustomer(item)}
                            />
                    }
                />
            </Container>
            <Footer>
                <StyledButton
                    title={`${mode} Cliente`}
                    onPress={() => {
                        activeCustomer && handleSelectCustomer(activeCustomer);
                        closeModal();
                    }}
                    enabled={!!activeCustomer?.id}
                />
            </Footer>

        </>
    );
}