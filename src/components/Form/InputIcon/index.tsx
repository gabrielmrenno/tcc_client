import React, { ForwardedRef, forwardRef, RefForwardingComponent } from 'react';
import { TextInputProps, TextInput } from 'react-native'

import {
    Container,
    InputText,
    Icon,
} from './styles';

interface Props extends TextInputProps {
    nameIcon: string;
};

export const InputIcon = React.forwardRef(({
    nameIcon,
    ...rest
}: Props, ref: React.Ref<TextInput>) => {
    return (
        <Container>
            <Icon
                name={nameIcon} />
            <InputText
                {...rest}
                ref={ref}
                placeholderTextColor={'rgba(0,0,0,0.3)'}
            />
        </Container>
    );
});