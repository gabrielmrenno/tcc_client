import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Input } from '../../components/Form/Input';

import {
    Container,
    Logo,
    LoginComponents,
    LoginHeader,
    Title,
    Subtitle,
    LoginForm,
    LoginInput,
    LoginButton,
} from './styles';

export function Login() {
    return (

        <LinearGradient
            colors={['#2b2b2b', '#555']}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Logo
                source={require('../../assets/logo.png')}
            />
            <LoginComponents>
                <LoginHeader>
                    <Title>Login</Title>
                    <Subtitle>Entre com sua conta cadastrada</Subtitle>
                </LoginHeader>
                <LoginForm>
                    <Input nameIcon="user" placeholder="Username" />
                    <Input placeholder="Senha" />
                    <LoginButton title="Entrar"></LoginButton>
                </LoginForm>
            </LoginComponents>
        </LinearGradient>
    )
}