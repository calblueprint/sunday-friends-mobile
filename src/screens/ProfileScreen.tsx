import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import ViewContainer from '../components/ViewContainer';

const ProfileScreen = () => {

    return (
        <ViewContainer>
            <Title>Profile Screen</Title>
            <EditScreenInfo path="/screens/ProfileScreen.tsx" />
        </ViewContainer>
    );
}

export default ProfileScreen;