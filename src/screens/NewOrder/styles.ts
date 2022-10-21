import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { OrderProductDTO } from "../../types/DTOs/OrderProductDTO";

interface FinishOrderProps extends RectButtonProps {
    children: React.ReactNode[];
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 20px 20px;
`;

export const HeaderTitle = styled.Text`
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
`;

export const ProductList = styled(FlatList<OrderProductDTO>)`
    margin-bottom: ${RFValue(95)}px;
    margin-top: ${RFValue(20)}px;
`;

export const FooterResults = styled.View`
    width: 100%;
    height: ${RFValue(115)}px;

    padding: ${RFValue(12)}px ${RFValue(16)}px;

    position: absolute;
    bottom: 0;

    background: ${({ theme }) => theme.colors.primary};
`;

export const Line = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: ${RFValue(8)}px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(16)}px;;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.gray}
`;

export const FinishOrder = styled(RectButton) <FinishOrderProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.gray}
`;

export const FinishOrderText = styled.Text`
    font-size: ${RFValue(18)}px;;
    font-weight: 600;

    margin-left: ${RFValue(8)}px;

    color: ${({ theme }) => theme.colors.gray}
`;
