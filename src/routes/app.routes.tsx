import React from "react";
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';

import { HeaderDrawer } from '../components/ScreenComponents/HeaderDrawer'
import { Home } from "../screens/Home";
import { NewOrder } from "../screens/NewOrder";
import { Products } from "../screens/Products/";

const AppStack = createDrawerNavigator();

export function AppRoutes() {
    return (
        <AppStack.Navigator
            screenOptions={({ navigation, route }: DrawerScreenProps<any>) => ({
                headerTitle: '',
                headerBackground: () => (
                    <HeaderDrawer
                        navigation={navigation}
                        route={route}
                    />
                ),
                headerLeft: () => null,
                drawerStyle: {
                    backgroundColor: '#FFF112'
                },
                drawerActiveTintColor: '#808001'
            })}
        >
            {/* <AppStack.Screen
                name="Home"
                component={Home}
            /> */}
            <AppStack.Screen name="Novo Pedido" component={NewOrder} />
            <AppStack.Screen name="Produtos" component={Products} />
        </AppStack.Navigator >
    )
}