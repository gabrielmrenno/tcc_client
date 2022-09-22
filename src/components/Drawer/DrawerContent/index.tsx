import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';

import { DrawerHeader, DrawerIcon, Line } from './styles';

export interface DrawerContentProps {
    contentScrollViewProps: React.ComponentProps<typeof DrawerContentScrollView>,
    itemListProps: React.ComponentProps<typeof DrawerItemList>
}


export function DrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader>
                <DrawerIcon source={require('../../../assets/logo.png')} />
            </DrawerHeader>
            <Line />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}