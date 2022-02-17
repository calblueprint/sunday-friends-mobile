import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import ViewContainer from '../components/ViewContainer';

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
        backgroundColor: '#eee',
    },
});

const InviteScreen = () => {

    return (
        <ViewContainer>
            <Title>Invite Screen</Title>
            <View style={styles.separator} />
            <EditScreenInfo path="/screens/InventoryScreen.tsx" />
        </ViewContainer>
    );
}

export default InviteScreen;