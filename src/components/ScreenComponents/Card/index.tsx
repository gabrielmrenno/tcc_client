import React from 'react';

import {
    Container,
    Header,
    Icon,
    Title,
    Body,
    Line,
    Description,
} from './styles';

interface CardProps {
    name: string;
    city: string;
    phoneNumber: string;
    discount: number;
}

export function Card({ name, city, phoneNumber, discount }: CardProps) {
    return (
        <Container>
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