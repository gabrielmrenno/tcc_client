import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { InputIcon } from '../../components/Form/InputIcon';
import { LoginButton } from '../../components/Form/LoginButton';

import {
    Logo,
    LoginComponents,
    LoginHeader,
    Title,
    Subtitle,
    LoginForm,
} from './styles';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const data = {
            email,
            password,
        }

        console.log(data);

        setEmail('');
        setPassword('');
    }

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
                    <InputIcon
                        nameIcon="user"
                        placeholder="Username"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <InputIcon
                        nameIcon="lock"
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <LoginButton
                        title="Entrar"
                        onPress={() => handleSubmit()}
                    />
                </LoginForm>
            </LoginComponents>
        </LinearGradient>
    )
}