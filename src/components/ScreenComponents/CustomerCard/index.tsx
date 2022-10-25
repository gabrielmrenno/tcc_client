import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CustomerModel } from '../../../types/Models/CustomerModal';
import {
    Container,
    Header,
    HeaderContainer,
    InfoIcon,
    Icon,
    IconsContainer,
    Title,
    Content,
    Line,
    Description
} from './styles';

interface CustomerCardProps {
    customer: CustomerModel;
    handleOpenSetCustomerModal: () => void;
}

export function CustomerCard({ customer, handleOpenSetCustomerModal }: CustomerCardProps) {
    return (
        <Container>
            <Header>
                <HeaderContainer>
                    <InfoIcon name="info" />
                    <Title>Detalhes do Cliente</Title>
                </HeaderContainer>
                <IconsContainer>
                    <TouchableOpacity onPress={() => handleOpenSetCustomerModal()}>
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
                    <Description>ID cliente: {customer.cnpj}</Description>
                </Line>
                <Line>
                    <Description>Nome: {customer.nome}</Description>
                </Line>
                <Line>
                    <Description>Endereço: {customer.endereco}</Description>
                </Line>
                <Line>
                    <Description>Cidade: {customer.cidade}</Description>
                </Line>
                <Line>
                    <Description>Bairro: {customer.bairro}</Description>
                </Line>
            </Content>
        </Container>
    );
}