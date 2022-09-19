import styled from "styled-components/native";
import { TextInput, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: white;
    border-radius: 5px;
    margin-bottom: 16px;
`;

export const Icon = styled(Feather)`
    margin-left: ${RFValue(10)}px;

    font-size: ${RFValue(24)}px;
`;


export const InputText = styled(TextInput)`
    flex: 1;
    padding: 16px;
    font-size: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.colors.white};

    border-radius: 5px;
`;