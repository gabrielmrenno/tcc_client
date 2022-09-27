import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { api } from "../../../../services/api";
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
    Separator,
} from "./styles";

export interface Customer {
    id: string;
    nome: string;
    nomeFantasia: string;
    tipoCliente: string;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string;
    telefone: string;
    email: string;
    nomeContato?: string;
    telefoneContato?: string;
    cnpj: string;
    desconto: number;
    createdAt: string;
    updatedAt: string;
}

interface SelectCustomerModalProps {
    closeModal: () => void;
    selectedCustomer: Customer | undefined;
    setSelectedCustomer: (customer: Customer) => void;
}


export function SelectCustomerModal({
    closeModal,
    selectedCustomer,
    setSelectedCustomer
}: SelectCustomerModalProps) {
    const [customers, setCustomers] = useState<Customer[]>([] as Customer[]);
    const [activeCustomer, setActiveCustomer] = useState<Customer>();

    const [search, setSearch] = useState("");

    useEffect(() => {
        api.get("/clients")
            .then((response) => {
                setCustomers(response.data);
            });
    }, [])

    function handleSelectCustomer(item: Customer) {
        setSelectedCustomer(item);
    }
    function handleSelectActiveCustomer(item: Customer) {
        setActiveCustomer(item);
    }

    return (
        <>
            <BackgroundContainer />
            <Container>
                <SearchCustomer>
                    <HeaderContainer>
                        <SearchText>
                            Adicionar Cliente
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
                    data={customers}
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
                <StyledButton title="Selecionar Cliente" onPress={() => {
                    activeCustomer && handleSelectCustomer(activeCustomer);
                    closeModal();
                }} />
            </Footer>

        </>
    );
}