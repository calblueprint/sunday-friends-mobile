import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EditScreenInfo from '../components/EditScreenInfo';
import ViewContainer from '../components/ViewContainer';
import { LoginStackParamList, RootStackParamList, RootTabParamList } from '../types/navigation';

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
        backgroundColor: '#eee',
    },
});

const InventoryScreen = ({ navigation }: any) => {
    return (
        <ViewContainer>
            <Title>"Bonus" Screen</Title>
            <View style={styles.separator} />
            {/* <EditScreenInfo path="/screens/InventoryScreen.tsx" /> */}
        </ViewContainer>
    );
}

export default InventoryScreen;