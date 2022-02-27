import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
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

const FamilyScreen = ({ navigation }: any) => {
    return (
        <ViewContainer>
            <Title> Family Screen </Title>
            <View style={styles.separator} />
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('LoginStack', { screen: 'Initial' })}
            ></Button>
            <Button
                title="Go to Registration"
                onPress={() => navigation.navigate('LoginStack', { screen: 'Invite' })}
            ></Button>
            <EditScreenInfo path="/screens/FamilyScreen.tsx" />
        </ViewContainer>
    );
}

export default FamilyScreen;