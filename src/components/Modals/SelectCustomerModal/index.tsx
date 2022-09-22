import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { api } from "../../../../services/api";
import { InputIcon } from "../../Form/InputIcon";
import { LoginButton } from "../../Form/LoginButton";
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

interface Customer {
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
    onPress: () => void;
}


export function SelectCustomerModal({ onPress }: SelectCustomerModalProps) {
    const [customers, setCustomers] = useState<Customer[]>([] as Customer[]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        api.get("/clients")
            .then((response) => {
                setCustomers(response.data);
            });
    }, [])

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
                            onPress={onPress}
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
                                key={item.id}
                                name={item.nome}
                                city={item.cidade}
                                phoneNumber={item.telefone}
                                discount={item.desconto}
                            />
                    }
                />
                <Footer>
                    {/* <LoginButton title="Adicionar" onPress={() => { }} /> */}
                </Footer>
            </Container>
        </>
    );
}