import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 0 20px;
`;
export const HeaderTitle = styled.Text`
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;

    margin: 24px 0;
`;

export const SearchCustomer = styled.View`
    margin-bottom: 24px;
`;

export const SearchText = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;

    margin-bottom: 16px;
`;


export const CustomerListTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;

    margin-bottom: 24px;
`;