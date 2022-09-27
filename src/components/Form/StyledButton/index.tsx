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
    isLoading?: boolean;
}

export function StyledButton({
    title,
    onPress,
    isLoading,
    ...rest
}: Props) {
    return (
        <Container
            onPress={onPress}
            {...rest}
        >
            <Title>
                {isLoading ? <ActivityIndicator size="small" /> : title}
            </Title>
        </Container>
    );
}