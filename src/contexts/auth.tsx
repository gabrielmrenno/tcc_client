import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

interface AuthContextData {
    signed: boolean;
    username: string | null;
    signIn({ usernameData, password }: SignInData): void;
    signOut(): void;
}

interface SignInData {
    usernameData: string;
    password: string;
}

interface AuthenticateUserResponse {
    username: string;
    token: string;
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

    async function signIn({ usernameData, password }: SignInData) {
        await api.post<AuthenticateUserResponse>('/login/sessions', {
            username: usernameData,
            password: password
        }).then(response => {
            api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;

            async function setAsyncData() {
                await AsyncStorage.setItem('@SalesAppTCC:user', response.data.username);
                await AsyncStorage.setItem('@SalesAppTCC:user', response.data.token);
            }

            setAsyncData();

            setUser(response.data.username);
            setIsAuthenticated(true);
        }).catch((err) => {
            Alert.alert("Atenção", err.response.data.message, [{ text: "Ok" }]);
        });

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