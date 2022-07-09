import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { InputIcon } from '../../components/Form/InputIcon';
import { LoginButton } from '../../components/Form/LoginButton';

import {
    Container,
    Logo,
    LoginComponents,
    LoginHeader,
    Title,
    Subtitle,
    LoginForm,
} from './styles';
import { Platform } from 'react-native';

export function Login({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const data = {
            email,
            password,
        }

        console.log(data);

        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });

        setEmail('');
        setPassword('');
    }

    return (

        <LinearGradient
            colors={['#2b2b2b', '#555']}
            style={{ flex: 1 }}
        >
            <Container
                behavior={Platform.OS === "ios" ? "padding" : "height"}
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
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <LoginButton
                            title="Entrar"
                            onPress={() => handleSubmit()}
                        />
                    </LoginForm>
                </LoginComponents>
            </Container>
        </LinearGradient>
    )
}