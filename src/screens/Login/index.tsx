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
import { Platform, TextInput } from 'react-native';


export function Login({ navigation }: any) {
    const [isLoading, setIsLoading] = useState(false);
    const { signIn } = useAuth();

    const usernameRef = useRef<TextInput>(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        setIsLoading(true);
        signIn({ username, password });


        setUsername('');
        setPassword('');
        setIsLoading(false);
        usernameRef.current?.focus();
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
                            ref={usernameRef}
                            nameIcon="user"
                            placeholder="Username"
                            value={username}
                            onChangeText={(text: string) => setUsername(text)}
                        />
                        <InputIcon
                            nameIcon="lock"
                            placeholder="Senha"
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text: string) => setPassword(text)}
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