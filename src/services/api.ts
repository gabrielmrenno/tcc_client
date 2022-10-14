import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.2.100:3333',
});

export interface AuthenticateUser {
    usernameData: string;
    password: string;
    setUser: () => void;
    setIsAuthenticated: () => void;
}

interface AuthenticateUserResponse {
    username: string;
    token: string;
}
interface AuthenticateUserError {
    message: string;
}

export function useApi() {
    async function authenticateUser({ usernameData, password }: AuthenticateUser) {
    }


    return { authenticateUser };
}