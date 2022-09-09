import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from "../screens/Login";

const AuthStack = createStackNavigator();

export function AuthRoutes() {
    return (
        <AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    )
}