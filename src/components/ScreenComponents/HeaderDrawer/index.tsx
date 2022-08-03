import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
    Header,
    IconSideBar,
    AccountInfo,
    UserIcon,
    LeaveIcon,
} from './styles';

export function HeaderDrawer() {
    return (
        <Header>
            <IconSideBar
                name="menu"
            />
            <AccountInfo>
                <UserIcon
                    name="user"
                />
                <LeaveIcon
                    name="log-out"
                />
            </AccountInfo>
            <StatusBar style='dark' />
        </Header>
    )
}