import React from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';

import { Container, ItemList } from './styles';

export interface DrawerContentProps {
    contentScrollViewProps: React.ComponentProps<typeof DrawerContentScrollView>,
    itemListProps: React.ComponentProps<typeof DrawerItemList>
}


export function DrawerContent(props: DrawerContentComponentProps) {
    return (
        <Container {...props}>
            <ItemList {...props} />
        </Container>
    );
}