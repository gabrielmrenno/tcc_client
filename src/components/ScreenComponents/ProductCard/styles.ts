import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;

    margin-bottom: 20px;
    padding: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoIcon = styled(Feather)`
    font-size: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.gray};

    margin-left: 16px;
`;

export const IconsContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 500;

    margin-left: ${RFValue(14)}px;
`;

export const Content = styled.View`
    margin-bottom: 8px;
`;

export const Line = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${RFValue(12)}px;
    margin-bottom: ${RFValue(4)}px;
`;

export const Description = styled.Text`
    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.gray}
`;

export const DescriptionBold = styled.Text`
    font-size: 14px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.gray}
`;