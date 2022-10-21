import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
    children: React.ReactNode[];
    enabled: boolean;
}

export const Container = styled(RectButton) <Props>`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: ${({ theme, enabled }) => enabled ? 1 : .5};
    padding: 18px;
    border-radius: 5px;
    align-items: center;

    margin-top: 8px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
`;