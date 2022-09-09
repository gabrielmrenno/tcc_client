import React, { useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { InputIcon } from '../../components/Form/InputIcon';
import { LoginButton } from '../../components/Form/LoginButton';
import { useAuth } from '../../contexts/auth';

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
    const [isLoading, setIsLoading] = useState(false);
    const { signIn } = useAuth();

    const usernameRef = useRef(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        setIsLoading(true);
        signIn({ username, password });

        setUsername('');
        setPassword('');
        setIsLoading(false);
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
                            value={username}
                            onChangeText={(text) => setUsername(text)}
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
                            isLoading={isLoading}
                        />
                    </LoginForm>
                </LoginComponents>
            </Container>
        </LinearGradient>
    )
}