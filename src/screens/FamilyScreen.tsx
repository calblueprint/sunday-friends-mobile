import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Title } from 'react-native-paper';
import ViewContainer from '../components/ViewContainer';
import globalStyles from '../globalStyles';
import SvgIcon from '../../assets/SvgIcon';

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
        backgroundColor: "#EEEEEE"
    },
    chevron: {
        width: '60px',
        height: '60px'
    }
});

const FamilyScreen = ({ navigation }: any) => {

    return (
        <ViewContainer>
            <Title style={globalStyles.h1}> Family Screen </Title>
            <View style={styles.separator} />
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signin' })}
            ></Button>
            <SvgIcon type="chevron_down" />
            <Button
                title="Go to Registration"
                onPress={() => navigation.navigate('LoginStack', { screen: 'Invite' })}
            ></Button>
            <EditScreenInfo path="/screens/FamilyScreen.tsx" />
        </ViewContainer>
    );
}

export default FamilyScreen;