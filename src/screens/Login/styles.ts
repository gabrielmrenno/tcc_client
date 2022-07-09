import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: 144px;
`;

export const LoginComponents = styled.View`
    width: 100%;
    padding: 24px 20px;
`;

export const LoginHeader = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    font-weight: 500;
    color: white;
`;
export const Subtitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 400;
    color: white
`;

export const LoginForm = styled.View`
    padding-top: 35px;

    margin: 10px;
`;

export const LoginInput = styled.TextInput`
`;
export const LoginButton = styled.Button`

`;