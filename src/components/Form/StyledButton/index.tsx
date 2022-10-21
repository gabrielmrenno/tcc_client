import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Title
} from "./styles";

interface Props extends RectButtonProps {
    title: string;
    onPress: () => void;
    enabled?: boolean;
    isLoading?: boolean;
}

export function StyledButton({
    title,
    onPress,
    isLoading,
    enabled = true,
    ...rest
}: Props) {
    return (
        <Container
            {...rest}
            onPress={onPress}
            enabled={enabled}
        >
            <Title>
                {isLoading ? <ActivityIndicator size="small" /> : title}
            </Title>
        </Container>
    );
}