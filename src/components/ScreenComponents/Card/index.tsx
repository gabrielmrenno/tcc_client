import React from 'react';
import { Customer } from '../../Modals/SelectCustomerModal';

import {
    Container,
    Header,
    Icon,
    Title,
    Body,
    Line,
    Description,
} from './styles';

export interface CardProps {
    name: string;
    city: string;
    phoneNumber: string;
    discount: number;
    active: boolean;
    onPress: () => void;
}

export function Card({ name, city, phoneNumber, discount, active, onPress }: CardProps) {
    return (
        <Container
            active={active}
            onPress={onPress}
        >
            <Header>
                <Icon
                    name="location"
                />
                <Title>
                    {name}
                </Title>
            </Header>
            <Body>
                <Line>
                    <Description>
                        Cidade: {city}
                    </Description>
                </Line>
                <Line>
                    <Description>
                        Contato: {phoneNumber}
                    </Description>
                    <Description>
                        Desconto: {discount}%
                    </Description>
                </Line>
            </Body>
        </Container>
    );
}