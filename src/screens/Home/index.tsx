import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Brand, Container, Logo } from './styles';
import { Button } from 'react-native';

import { useAuth } from '../../contexts/auth';



export function Home({ navigation }: any) {
    const { signOut } = useAuth();
    return (

        <LinearGradient
            colors={['#2b2b2b', '#555']}
            style={{
                flex: 1
            }}
        >
            <Container>
                <Logo
                    source={require('../../assets/logo.png')}
                />
                <Brand
                    source={require('../../assets/brand.png')}
                />
            </Container>
        </LinearGradient>
    )
}