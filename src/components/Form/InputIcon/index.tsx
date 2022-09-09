import React from 'react';
import { TextInputProps, TextInput } from 'react-native'

import {
    Container,
    InputText,
    Icon,
} from './styles';

interface Props extends TextInputProps {
    nameIcon: string;
};

export function InputIcon({
    nameIcon,
    ...rest
}: Props) {
    return (
        <Container>
            <Icon
                name={nameIcon} />
            <InputText
                {...rest}
                placeholderTextColor={'rgba(0,0,0,0.3)'}
            />
        </Container>
    );
}