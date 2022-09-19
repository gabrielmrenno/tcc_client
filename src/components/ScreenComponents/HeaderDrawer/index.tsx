import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { useAuth } from '../../../contexts/auth';

import {
    Header,
    IconSideBar,
    AccountInfo,
    UserIcon,
    LeaveIcon,
} from './styles';

export function HeaderDrawer({ navigation }: DrawerScreenProps<any>) {
    const { signOut } = useAuth();

    return (
        <Header>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <IconSideBar
                    name="menu"
                />
            </TouchableOpacity>
            <AccountInfo>
                <TouchableOpacity
                    onPress={() => console.log("Abrir Perfil")}
                >
                    <UserIcon
                        name="user"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => signOut()}
                >
                    <LeaveIcon
                        name="log-out"
                    />
                </TouchableOpacity>
            </AccountInfo>
            <StatusBar style='dark' />
        </Header>
    )
}

export function HeaderSideBar() {
    return (
        <IconSideBar
            name="menu"
        />
    )
}

export function HeaderBackground() {
    <Header />
}