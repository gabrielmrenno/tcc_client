import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { SelectCustomer } from "../screens/SelectCustomer"
import { Home } from "../screens/Home";

const AppStack = createStackNavigator();

export function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="SelectCustomer" component={SelectCustomer} />
        </AppStack.Navigator>
    )
}