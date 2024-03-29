import React from "react";
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';

import { HeaderDrawer } from '../components/Drawer/HeaderDrawer'
import { Home } from "../screens/Home";
import { NewOrder } from "../screens/NewOrder";
import { Products } from "../screens/Products/";
import { DrawerContent } from "../components/Drawer/DrawerContent";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

const AppStack = createDrawerNavigator();

export function AppRoutes() {
    return (
        <AppStack.Navigator
            screenOptions={({ navigation, route }: DrawerScreenProps<any>) => ({
                headerTitle: '',
                headerStyle: {
                    height: getStatusBarHeight() + RFValue(40)
                },
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
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Novo Pedido" component={NewOrder} />
            <AppStack.Screen name="Produtos" component={Products} />
        </AppStack.Navigator >
    )
}