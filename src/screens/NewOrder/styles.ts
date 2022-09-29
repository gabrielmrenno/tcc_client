import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 20px 20px;
`;

export const HeaderTitle = styled.Text`
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
`;

export const FooterResults = styled.View`
    width: 100%;
    height: ${RFValue(100)}px;

    position: absolute;
    bottom: 0;

    background: ${({ theme }) => theme.colors.primary};
`;