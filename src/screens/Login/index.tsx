import React, { useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, TextInput } from 'react-native';

import { InputIcon } from '../../components/Form/InputIcon';
import { StyledButton } from '../../components/Form/StyledButton';
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



export function Login({ navigation }: any) {
    const [isLoading, setIsLoading] = useState(false);
    const { signIn } = useAuth();

    const usernameRef = useRef<TextInput>(null);

    const [usernameData, setUsernameData] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        setIsLoading(true);
        signIn({ usernameData, password });


        setUsernameData('');
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
                            value={usernameData}
                            onChangeText={(text: string) => setUsernameData(text)}
                        />
                        <InputIcon
                            nameIcon="lock"
                            placeholder="Senha"
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text: string) => setPassword(text)}
                        />
                        <StyledButton
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