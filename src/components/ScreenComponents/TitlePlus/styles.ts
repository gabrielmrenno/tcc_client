import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

export const SubtitleContainer = styled.View`
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-top: ${RFValue(24)}px;
`;

export const Subtitle = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const PlusIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
`;