import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
    children: React.ReactNode;
    enabled: boolean;
    reverseColor: boolean;
}

interface TextProps {
    reverseColor: boolean;
}

export const Container = styled(RectButton) <ContainerProps>`
    width: 100%;
    background-color: ${({ theme, reverseColor }) =>
        reverseColor ? theme.colors.gray_dark : theme.colors.primary};
    opacity: ${({ enabled }) => enabled ? 1 : .5};
    padding: 18px;
    border-radius: 5px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primary};
    align-items: center;

    margin-top: 8px;

`;

export const Title = styled.Text<TextProps>`
    font-size: ${RFValue(18)}px;
    font-weight: 400;
    color: ${({ theme, reverseColor }) => reverseColor ? theme.colors.primary : theme.colors.gray};
`;