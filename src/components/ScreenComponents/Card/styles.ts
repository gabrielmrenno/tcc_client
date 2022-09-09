import styled from "styled-components/native";
import { EvilIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    background-color: '##DDDDDD';
    border-radius: 10px;

    padding: 16px;
    margin-bottom: 16px;
`;
export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Icon = styled(EvilIcons)`
    font-size: ${RFValue(24)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 500;

    margin-left: ${RFValue(6)}px;
`;
export const Body = styled.View`
`;
export const Line = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${RFValue(12)}px;
`;
export const Description = styled.Text`
    font-size: 14px;
    font-weight: 400;
`;