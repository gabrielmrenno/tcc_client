import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

export const BackgroundContainer = styled.View`
    flex: 1;
    background-color: rgba(43, 43, 43, 0.8);

    margin-bottom: -10px;
`;

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

export const HeaderContainer = styled.View`
    padding-bottom: 16px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CloseIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary_light};
`;

export const SearchCustomer = styled.View`
    margin-bottom: ${RFValue(8)}px;
`;

export const SearchText = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
`;

export const Footer = styled.View`
    width: 100%;

    position: absolute;
    bottom: 0;
    right: ${RFValue(16)}px;

    padding-bottom: ${RFValue(16)}px;
`;