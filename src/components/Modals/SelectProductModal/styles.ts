import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

export const ModalContainer = styled.View`
    width: 100%;
    flex: 1;
`;

export const BackgroundContainer = styled.View`
    flex: 1;
    background-color: rgba(43, 43, 43, 0.8);

    margin-bottom: -10px;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray_dark};

    position: absolute;
    bottom: 0;

    border-top-left-radius: ${RFValue(10)}px;
    border-top-right-radius: ${RFValue(10)}px;

    padding: 16px 20px;
`;

export const HeaderContainer = styled.View`
    padding-bottom: 16px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CloseIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary_light};
`;

export const SearchCustomer = styled.View`
    margin-bottom: ${RFValue(8)}px;
`;

export const SearchText = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
`;

export const Content = styled.View`
    
`;

export const DropdownProducts = styled(Dropdown)`
    flex: 1;
    padding: 8px 16px;
    font-size: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.gray_light};

    border-radius: 5px;
`;

export const DetailsContainer = styled.View`
    width: 100%;
    flex-direction: row;

    justify-content: space-between;
`;

export const InputContainer = styled.View`
    width: 48%;
`;

export const ProductDetailsContainer = styled.View`
    padding-bottom: ${RFValue(8)}px;
`;

export const ProductDetails = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: ${RFValue(8)}px;
`;

export const Label = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Value = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.white};
`;

