import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Title } from 'react-native-paper';
import ViewContainer from '../../components/ViewContainer';
import { default as styles } from "./styles";
import RectangularButton from '../../components/RegularButton';

// const styles = StyleSheet.create({
//     separator: {
//         marginVertical: 30,
//         height: 1,
//         width: "80%",
//         backgroundColor: "#eee"
//     },
// });

const InitialScreen = ({ navigation }: any) => {
    return (
        <ViewContainer>
            {/* <Title>Login</Title> */}
            {/* <View style={styles.separator} /> */}
            {/* <EditScreenInfo path="/screens/LoginScreen.tsx" /> */}
            <Text style={styles.title1}>Oh, hi there!</Text>
            <Text style={styles.text}>Let's sign you into your account.</Text>
            {/* <Button
                title="Log in"
                onPress={() => navigation.navigate('LoginStack', { screen: 'Login' })}
            /> */}
            {/* <Button title="Sign Up" onPress={() => navigation.navigate('LoginStack', { screen: 'Login' })}/> */}
            <RectangularButton
                text="Log in"
            />
            <Button
                title="Sign up"
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signup' })}
            />
        </ViewContainer>
    );
}

export default InitialScreen;