import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons"



export const Header = styled.View`
    width: 100%;
    height: ${getStatusBarHeight() + RFValue(50)}px;

    padding-top: ${getStatusBarHeight()}px;

    background-color: ${({ theme }) => theme.colors.primary};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const IconSideBar = styled(Feather)`
    font-size: ${RFValue(24)}px;

    padding-left: ${RFValue(20)}px;
`;

export const AccountInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: ${RFValue(20)}px;
`;

export const UserIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;

    padding-right: ${RFValue(14)}px;
`;

export const LeaveIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;

    padding-left: ${RFValue(14)}px;
`;
