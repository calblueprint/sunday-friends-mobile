import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getAllTransactions } from '../firebase/firestore/transaction';
import { useEffect } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default function PersonalScreen() {

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
        <View style={styles.container}>
            <Text style={styles.title}>Personal Screen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/PersonalScreen.tsx" />
        </View>
    );
}