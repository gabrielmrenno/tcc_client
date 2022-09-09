import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: ${RFValue(550)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray_dark};

    margin-top: ${RFValue(150)}px;

    position: absolute;
    bottom: 0;

    border-top-left-radius: ${RFValue(10)}px;
    border-top-right-radius: ${RFValue(10)}px;

    padding: 16px 20px;
`;

export const SearchCustomer = styled.View`
    margin-bottom: ${RFValue(8)}px;
`;

export const SearchText = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;

    margin-bottom: 16px;
`;

export const Footer = styled.View`
    width: 100%;

    position: absolute;
    bottom: 0;
    right: ${RFValue(16)}px;

    padding-bottom: ${RFValue(16)}px;
`;