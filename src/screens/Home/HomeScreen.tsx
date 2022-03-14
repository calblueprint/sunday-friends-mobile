import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Pressable, Button, Modal, Image} from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect } from 'react';
import ViewContainer from '../../components/ViewContainer';
import { Divider, Title } from 'react-native-paper';
import styles from './styles';
import {customStyles} from './styles';
import globalStyles from "../../globalStyles";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {moment} from 'moment';
import StepIndicator from 'react-native-step-indicator';

const labels = ["1000", '2000', '3000'];

const getCurrentDate=()=>{
    var moment = require('moment');
    return (moment().format('dddd[,] MMMM Do')); 
}


const HomeScreen = ({navigation}: any) => {
    return (
        <View style = {styles.homeContainer}>
            <View style = {styles.dateContainer}>
                <Text style={[globalStyles.body2, {color: '#525454'}]}>{getCurrentDate()}</Text>
            </View>
            <View style = {styles.headline}>
                <Text style={[globalStyles.h3Bold, {color: '#272929'}]}>Kim Family</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.addPersonalCircle}>
                    <Pressable
                        onPress={()=>navigation.navigate('Profile')}
                    >
                        <Text style={[styles.initialText, {color: '#253C85'}]}>Y</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.familyCardContainer}>
                <View style={styles.addContainer}>
                    <View style={styles.stackOfSmileys}>
                        <Image style = {[styles.profileImage, {position: 'absolute', left: 0}]} source={require('../../../assets/images/parentSmiley.png')}/>
                        <Image style = {[styles.profileImage, {position: 'absolute', left: 27}]} source={require('../../../assets/images/headSmiley.png')} />
                        <Image style = {[styles.profileImage, {position: 'absolute', left: 57}]} source={require('../../../assets/images/childSmiley.png')} />
                        <Image style = {[styles.profileImage, {position: 'absolute', left: 90}]} source={require('../../../assets/images/childSmiley.png')} />
                    </View>
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
                        <Text style={[styles.balanceText, {color: "#253C85"}]}>100</Text>
                        <Text style={globalStyles.overline2}>FAMILY BALANCE</Text>
                    </View>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'white'
                                : '#E6ECFE'
                            },
                            styles.contributions
                            ]}>
                            <Text style={[globalStyles.body2Bold, {color: "#5F5F5F"}]}>View Contributions</Text>
                        </Pressable>
                </View>

                <View style={styles.progressBar}>
                    <StepIndicator 
                    stepCount = {3}
                    customStyles={customStyles}
                    currentPosition={0}
                    labels={labels}
                    />

                </View>
                <View style={styles.buttomBar}>
                    <View  style={styles.tierContainer}>
                        <View style={styles.tierBox}>
                            <Text style={[globalStyles.overline1, {color: "#FFFFFF"}]}>TIER 1</Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <View style={styles.rowContainer}>
                                <Text style={[styles.itemsText, {color: "#525454"}]}>[ICON] </Text>
                                <Text style={[styles.itemsText, {color: "#525454"}]}>Bottle water, can food, fresh food</Text>
                            </View>
                            <View style={styles.rowContainer}>
                                <Text style={[styles.itemsText, {color: "#525454"}]}>[ICON] </Text>
                                <Text style={[styles.itemsText, {color: "#525454"}]}>Hygeine products, toiletries</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.tierOptionsContainer}>
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
                </View>
                <View>
                </View>
            </View>
            
        </View>
        
    );
}

export default HomeScreen;
