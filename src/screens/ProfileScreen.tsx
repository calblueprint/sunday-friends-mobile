import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ViewContainer from '../components/ViewContainer';
import { Title } from 'react-native-paper';

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
        backgroundColor: '#eee',
    },
});

export default function ProfileScreen() {
    return (
        <ViewContainer>
            <Title>Profile</Title>
            <View style={styles.separator} />
            <EditScreenInfo path="/screens/ProfileScreen.tsx" />
        </ViewContainer>
    );
}