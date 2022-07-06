import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'react-native-gesture-handler';

import { Login } from './src/screens/Login';
import theme from './src/global/theme';

export default function App() {
  return (
    <Login />
  );
}
