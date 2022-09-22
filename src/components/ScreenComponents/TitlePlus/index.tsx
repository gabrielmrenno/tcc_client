import React from 'react';
import {
    SubtitleContainer,
    Subtitle,
    PlusIcon,
} from './styles';

interface TitlePlusProps {
    title: string;
    onPress: () => void;
}

export function TitlePlus({ title, onPress }: TitlePlusProps) {
    return (
        <SubtitleContainer>
            <Subtitle>{title}</Subtitle>
            <PlusIcon
                name="plus-square"
                onPress={onPress}
            />
        </SubtitleContainer>
    );
}