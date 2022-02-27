import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Title } from 'react-native-paper';
import ViewContainer from '../../components/ViewContainer';
import { default as styles } from "./styles";

const LoginScreen = () => {
    return (
        <ViewContainer>
            <Title>Login</Title>
        </ViewContainer>
    );
}

export default LoginScreen;