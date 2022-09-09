import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../../services/api';

interface AuthContextData {
    signed: boolean;
    username: string | null;
    signIn({ username, password }: SignInData): void;
    signOut(): void;
}

interface SignInData {
    username: string;
    password: string;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
    children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@SalesAppTCC:user');
            const storageToken = await AsyncStorage.getItem('@SalesAppTCC:user');

            if (storageUser && storageToken) {
                api.post('/usuarios/isAuthenticated', null, {
                    headers: {
                        'Authorization': 'Bearer ' + storageToken
                    }
                })
                    .then(response => {
                        const { userIsAuthenticated } = response.data

                        if (userIsAuthenticated) {
                            api.defaults.headers.common['Authorization'] = 'Bearer ' + storageToken;
                        }

                        setUser(storageUser);
                        setIsAuthenticated(userIsAuthenticated);
                    }).catch(() => {
                        console.log("Error");
                    })

            }
        }

        loadStorageData();
    }, [])

    async function signIn({ username, password }: SignInData) {
        api.post('/login/sessions', {
            username: username,
            password: password
        }).then(async (response) => {
            const { username, token } = response.data;
            setUser(username);
            setIsAuthenticated(true);

            api.defaults.headers.common['Authorization'] = 'Bearer ' + token;

            await AsyncStorage.setItem('@SalesAppTCC:user', username);
            await AsyncStorage.setItem('@SalesAppTCC:user', token);
        })
            .catch((err) => {
                // console.log(err.response.data.message);
                Alert.alert("Atenção", err.response.data.message, [{ text: "Ok", onPress: () => console.log("OK Pressed") }]);
            })
    }
    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
            setIsAuthenticated(false);
        });
    }
    return (
        <AuthContext.Provider value={{ signed: isAuthenticated, username: user, signIn, signOut }}>
            {/* All children that AuthProvider contains */}
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}