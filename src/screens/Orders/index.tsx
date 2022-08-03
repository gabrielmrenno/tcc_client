import React from "react";

import { InputIcon } from "../../components/Form/InputIcon";
import { Card } from "../../components/ScreenComponents/Card";

import {
    Container,
    HeaderTitle,
    SearchText,
    SearchCustomer,
    CustomerListTitle,
} from "./styles";



export function Orders() {
    return (
        <Container>
            <HeaderTitle>
                Novo Pedido
            </HeaderTitle>
            <SearchCustomer>
                <SearchText>
                    Selecione o cliente
                </SearchText>
                <InputIcon
                    nameIcon="search"
                    placeholder="Nome fantasia"
                />
            </SearchCustomer>
            <CustomerListTitle>
                Clientes encontrados:
            </CustomerListTitle>
            <Card
                name="Cliente 1"
                code={12345}
                city="São Paulo"
                phoneNumber="(11) 9 9999-9999"
                discount={10}
            />
            <Card
                name="Cliente 2"
                code={12345}
                city="São Paulo"
                phoneNumber="(11) 9 9999-9999"
                discount={10}
            />
            <Card
                name="Cliente 3"
                code={12345}
                city="São Paulo"
                phoneNumber="(11) 9 9999-9999"
                discount={10}
            />
        </Container>
    );
}