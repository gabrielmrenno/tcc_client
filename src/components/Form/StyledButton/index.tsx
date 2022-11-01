import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import theme from '../../../global/theme';

import {
    Container,
    Title
} from "./styles";

interface Props extends RectButtonProps {
    title: string;
    onPress: () => void;
    enabled?: boolean;
    isLoading?: boolean;
    reverseColor?: boolean;
}

export function StyledButton({
    title,
    onPress,
    isLoading,
    enabled = true,
    reverseColor = false,
    ...rest
}: Props) {
    return (
        <Container
            {...rest}
            reverseColor={reverseColor}
            onPress={onPress}
            enabled={enabled}
        >
            <Title
                reverseColor={reverseColor}
            >
                {isLoading ? <ActivityIndicator size="small" /> : title}
            </Title>
        </Container>
    );
}