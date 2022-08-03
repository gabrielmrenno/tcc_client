import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from './src/screens/Login';

import theme from './src/global/theme';
import DrawerNavigator from './src/routes/DrawerNavigator';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
