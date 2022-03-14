import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import ViewContainer from '../../components/ViewContainer';
import { Title } from 'react-native-paper';
import styles from './styles';
import firebaseApp from "../../firebase/firebaseApp";

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

    const isFocused = useIsFocused();
    const uid = firebaseApp.auth().currentUser?.uid;

    useEffect(() => {
        async function getUserInfo() {
          if (uid === undefined) {
            navigation.navigate('LoginStack', { screen: 'Login' });
          } else {
            // const client = await getClient(uid);
            // setName(client.fullName);
            // const clientCases = await getAllCases(uid);
            // setCases(clientCases);
          }
        }
        getUserInfo();
      }, [isFocused]);

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