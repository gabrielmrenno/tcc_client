import React from "react";
import { InputIcon } from "../../components/Form/InputIcon";
import {
    Container,
    HeaderTitle,
    SearchProduct,
    Group,
} from "./styles";

export function Products() {
    return (
        <Container>
            <HeaderTitle>
                Produtos
            </HeaderTitle>
            <SearchProduct>
                <InputIcon
                    nameIcon="search"
                    placeholder="Nome do produto"
                />
                <Group />
            </SearchProduct>
        </Container>
    )
}