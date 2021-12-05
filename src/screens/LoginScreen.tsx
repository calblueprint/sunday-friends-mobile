import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Title } from 'react-native-paper';
import ViewContainer from '../components/ViewContainer';

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
        backgroundColor: "#eee"
    },
});

export default function LoginScreen() {
    return (
        <ViewContainer>
            <Title>Login</Title>
            <View style={styles.separator} />
            <EditScreenInfo path="/screens/LoginScreen.tsx" />
        </ViewContainer>
    );
}