import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect } from 'react';
import ViewContainer from '../../components/ViewContainer';
import { Title } from 'react-native-paper';
import styles from './styles';

// comment

const HomeScreen = ({ navigation }: any) => {

    // USED FOR MANUAL TESTING, FEEL FREE TO COMMENT OUT/DELETE
    // useEffect(() => {
    //     const test = async () => {
    //         const allTs = await getAllTransactions();
    //         console.log(allTs);
    //         if (allTs) {
    //             console.log(allTs[0])
    //         }
    //     }
    //     test();
    // }, []);

    return (
        <ViewContainer>
            <Title>Home Screen</Title>
            <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate('Profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
            <EditScreenInfo path="/screens/HomeScreen.tsx" />
        </ViewContainer>
    );
}

export default HomeScreen;