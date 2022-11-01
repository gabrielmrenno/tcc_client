import React from 'react';
import { TouchableOpacity } from 'react-native';

import { OrderProductModel } from '../../../types/Models/OrderProductModel';

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
    product: OrderProductModel;
    setSelectedProduct: (product: OrderProductModel) => void;
    setDeleteMode: (deleteMode: "produto" | "cliente") => void;
    handleOpenSetProductModal: () => void;
    handleOpenDeleteModal: () => void;
}

export function ProductCard({
    product,
    setSelectedProduct,
    setDeleteMode,
    handleOpenSetProductModal,
    handleOpenDeleteModal
}: ProductCardProps) {

    function handleOnPressEditButton() {
        setSelectedProduct(product);
        handleOpenSetProductModal();
    }

    function handleOnPressDeleteButton() {
        setDeleteMode("produto");
        handleOpenDeleteModal();
    }

    return (
        <Container>
            <Header>
                <HeaderContainer>
                    <InfoIcon name="shopping-bag" />
                    <Title>{product.product.nome}</Title>
                </HeaderContainer>
                <IconsContainer>
                    <TouchableOpacity onPress={() => handleOnPressEditButton()}>
                        <Icon
                            name="edit"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOnPressDeleteButton()}>
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