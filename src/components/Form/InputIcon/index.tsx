import React from 'react';
import { TextInputProps, TextInput } from 'react-native'

import {
    Container,
    Title,
    InputContainer,
    InputText,
    Icon,
} from './styles';

interface Props extends TextInputProps {
    nameIcon?: string;
    title?: string;
};

export const InputIcon = React.forwardRef(({
    nameIcon,
    title,
    ...rest
}: Props, ref: React.Ref<TextInput>) => {
    return (
        <Container>
            {!!title && <Title>{title}</Title>}
            <InputContainer>
                {!!nameIcon && <Icon name={nameIcon} />}
                <InputText
                    {...rest}
                    ref={ref}
                    placeholderTextColor={'rgba(0,0,0,0.3)'}
                />
            </InputContainer>
        </Container>
    );
});