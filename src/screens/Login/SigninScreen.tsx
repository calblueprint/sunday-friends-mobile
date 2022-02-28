import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import { default as styles } from "./styles";
import RectangularButton from '../../components/RectangularButton';


const SigninScreen = ({ navigation }: any) => {

    return (
        <ViewContainer>
            <Text style={styles.title1}>Oh, hi there!</Text>
            <Text style={styles.text}>Let's sign you into your account.</Text>
            <RectangularButton
                onPress={() => navigation.navigate('LoginStack', { screen: 'Login' })}
                text="Log in"
                buttonStyle={{ backgroundColor: '#253C85' }}
                textStyle={{ color: '#FFF' }}
            />
            <RectangularButton
                // style={styles.activateButton}
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signup' })}
                text="Activate"
                buttonStyle={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#253C85', marginTop: '3%' }}
                textStyle={{ color: '#253C85' }}
            />
        </ViewContainer>
    );
}

export default SigninScreen;