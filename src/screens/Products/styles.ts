import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray};
`;


export const HeaderTitle = styled.Text`
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;

    margin: ${RFValue(24)}px ${RFValue(20)}px;
`;

export const SearchProduct = styled.View`
    margin: 0 20px;
`;

export const Name = styled.View`
    
`;

export const Group = styled.View`

`;