import React from 'react';
import { TouchableOpacity } from 'react-native';

import { OrderProductDTO } from '../../../types/DTOs/OrderProductDTO';

import {
    Container,
    Header,
    HeaderContainer,
    InfoIcon,
    Title,
    IconsContainer,
    Icon,
    Content,
    Line,
    Description,
    DescriptionBold
} from './styles';

interface ProductCardProps {
    product: OrderProductDTO;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Container>
            <Header>
                <HeaderContainer>
                    <InfoIcon name="shopping-bag" />
                    <Title>{product.product.nome}</Title>
                </HeaderContainer>
                <IconsContainer>
                    <TouchableOpacity onPress={() => console.log("Edit")}>
                        <Icon
                            name="edit"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Delete")}>
                        <Icon
                            name="trash"
                        />
                    </TouchableOpacity>
                </IconsContainer>
            </Header>

            <Content>
                <Line>
                    <Description>Quantidade: {product.quantity}</Description>
                    <Description>Peso total: {product.quantity * product.product.peso} Kg</Description>
                </Line>
                <Line>
                    <Description>Valor unitário: R$ {product.product.preco.toFixed(2)}</Description>
                    <Description>Desconto: {product.discount} %</Description>
                </Line>
                <Line>
                    <DescriptionBold>Valor total:</DescriptionBold>
                    <DescriptionBold>R$ {((product.product.preco * product.quantity) * (1 - product.discount / 100)).toFixed(2)}</DescriptionBold>
                </Line>
            </Content>
        </Container>
    );
}