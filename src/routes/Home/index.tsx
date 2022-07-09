import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { LoginButton } from '../../components/Form/LoginButton';

export function Home({ navigation }: any) {
    return (

        <LinearGradient
            colors={['#2b2b2b', '#555']}
            style={{ flex: 1 }}
        >
            <LoginButton
                title="Voltar"
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    });
                }}
            />
        </LinearGradient>
    )
}