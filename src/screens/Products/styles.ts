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

    padding: 24px 20px;
`;

export const SearchProduct = styled.View`
    margin: 0 20px;
`;

export const Name = styled.View`
    
`;

export const Group = styled.View`

`;