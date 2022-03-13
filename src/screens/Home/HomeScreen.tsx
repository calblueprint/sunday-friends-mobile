import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Pressable} from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect } from 'react';
import ViewContainer from '../../components/ViewContainer';
import { Divider, Title } from 'react-native-paper';
import styles from './styles';
import globalStyles from "../../globalStyles";

const HomeScreen = ({navigation}: any) => {
    return (
        <View style = {styles.homeContainer}>
            <View style = {styles.headline}>
                <Text style={[globalStyles.h3Bold, {color: '#525454'}]}>Kim Family</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.addCircle} />
                </View>
            </View>

            <View style={styles.familyCardContainer}>
                <View style={styles.addContainer}>
                    <View style={styles.addCircle} />
                    <View style={styles.addCircle} />
                    <View style={styles.addCircle} />
                    <View style={styles.addCircle} />
                    <View style={styles.innerContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={[globalStyles.body1Bold,{color: "#5F5F5F"}]}>5 People</Text>
                        </View>
                        <Text style={[globalStyles.body1, {color: "#5F5F5F"}]}>Me, Jacob, Cindy, Albe...</Text>
                    </View>
                </View>
            </View>

            <View style={styles.familyBalanceCardContainer}>
                <View style={styles.topHalfContainer}>
                    <View style = {styles.balanceContainer}>
                        <Text style={[styles.balanceText, {color: "#5F5F5F"}]}>9088</Text>
                        <Text style={globalStyles.body1}>Account Balance</Text>
                    </View>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'white'
                                : '#F6F6F6'
                            },
                            styles.optionsContainer
                            ]}>
                            <Text style={[globalStyles.body2Bold, {color: '#A9A9A9'}]}>Tier Options</Text>
                        </Pressable>
                </View>
                <View style={styles.progressBar}>
                    <View style={styles.addBar} />
                    <View style={styles.levels}>
                        <View style={styles.columnContainer}>
                            <View style={styles.addLevelCircleCurrent}>
                                <Text style={[globalStyles.body2, {color:'white'}]}>1</Text>
                                </View>
                            <Text style={[globalStyles.body2, {color: '#A9A9A9'}]}>1000</Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <View style={styles.addLevelCircle}>
                                <Text style={globalStyles.body2}>2</Text>
                                </View>
                            <Text style={[globalStyles.body2, {color: '#A9A9A9'}]}>2000</Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <View style={styles.addLevelCircle}>
                                <Text style={globalStyles.body2}>3</Text>
                                </View>
                            <Text style={[globalStyles.body2, {color: '#A9A9A9'}]}>3000</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttomBar}>
                    <View style={styles.rowContainer}>
                        <Text style={[globalStyles.body2Bold, {color: "#5F5F5F"}]}>Tire 1: </Text>
                        <Text style={[globalStyles.body2, {color: "#5F5F5F"}]}>The Basic Family</Text>
                    </View>
                    <View>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'white'
                                : '#F2F2F2'
                            },
                            styles.contributions
                            ]}>
                            <Text style={[globalStyles.body2, {color: "#5F5F5F"}]}>View Contributions</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            
        </View>
        
    );
}

export default HomeScreen;
