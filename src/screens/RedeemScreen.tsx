import * as React from 'react';
import { StyleSheet, View } from 'react-native';
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

export default function RedeemScreen() {
    return (
        <ViewContainer>
            <Title>Redeem</Title>
            <View style={styles.separator} />
            <EditScreenInfo path="/screens/RedeemScreen.tsx" />
        </ViewContainer>
    );
}