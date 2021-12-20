import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { getAllTransactions } from '../firebase/firestore/transaction';
import { useEffect } from 'react';
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

export default function HomeScreen() {

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
            <View style={styles.separator} />
            <EditScreenInfo path="/screens/HomeScreen.tsx" />
        </ViewContainer>
    );
}