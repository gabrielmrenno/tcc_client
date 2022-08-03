import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../../screens/Home';
import { Products } from '../../screens/Products';
import { Orders } from '../../screens/Orders';
import { Customers } from '../../screens/Customers';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Produtos" component={Products} />
            <Drawer.Screen name="Pedidos" component={Orders} />
            <Drawer.Screen name="Clientes" component={Customers} />
        </Drawer.Navigator>
    );
}