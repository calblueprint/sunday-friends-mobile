import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Pressable} from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect } from 'react';
import ViewContainer from '../../components/ViewContainer';
import { Divider, Title } from 'react-native-paper';
import styles from './styles';
import globalStyles from "../../globalStyles";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {moment} from 'moment';
import StepIndicator from 'react-native-step-indicator';

const labels = ["1000", '2000', '3000'];

const getCurrentDate=()=>{
    var moment = require('moment');
    return (moment().format('dddd[,] MMMM Do')); 
}

const customStyles = {
    stepIndicatorSize: 23.05,
    currentStepIndicatorSize:23.05,
    separatorStrokeWidth: 4.39,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#7F93D1',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#7F93D1',
    stepStrokeUnFinishedColor: '#7F93D1',
    separatorFinishedColor: '#7F93D1',
    separatorUnFinishedColor: '#7F93D1',
    stepIndicatorFinishedColor: '#253C85',
    stepIndicatorUnFinishedColor: '#E6ECFE',
    stepIndicatorCurrentColor: '#253C85',
    stepIndicatorLabelFontSize: 14,
    currentStepIndicatorLabelFontSize: 14,
    stepIndicatorLabelCurrentColor: 'white',
    stepIndicatorLabelFinishedColor: 'white',
    stepIndicatorLabelUnFinishedColor: '#253C85',
    labelColor: '#A9A9A9',
    labelSize: 14,
    currentStepLabelColor: '#253C85'
  };



const HomeScreen = ({navigation}: any) => {
    return (
        <View style = {styles.homeContainer}>
            <View style = {styles.dateContainer}>
                <Text style={[globalStyles.body2, {color: '#525454'}]}>{getCurrentDate()}</Text>
            </View>
            <View style = {styles.headline}>
                <Text style={[globalStyles.h3Bold, {color: '#272929'}]}>Kim Family</Text>
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
                        <Text style={[styles.balanceText, {color: "#253C85"}]}>100</Text>
                        <Text style={globalStyles.overline2}>FAMILY BALANCE</Text>
                    </View>
                        {/* <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'white'
                                : '#F6F6F6'
                            },
                            styles.optionsContainer
                            ]}>
                            <Text style={[globalStyles.body2Bold, {color: '#A9A9A9'}]}>Tier Options</Text>
                        </Pressable> */}
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

                <View>
                <StepIndicator 
                    stepCount = {3}
                    customStyles={customStyles}
                    currentPosition={0}
                    labels={labels}
                />

                </View>

                {/* <View style={[{flex: 1}, {marginHorizontal: '5.3%'}]}>
                    <ProgressSteps activeStepIconColor = '#5F5F5F' topOffset = '20px' activeStepIconBorderColor = '#F2F2F2' progressBarColor = '#F2F2F2'
                    activeLabelColor = '#A9A9A9' labelColor = '#A9A9A9'>
                        <ProgressStep label="10000"  nextBtnTextStyle={styles.buttonTextStyle}>
                            <View style={[{ alignItems: 'center'}]}>
                                <Text>This is the content within step 1!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="200000">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="300000">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 3!</Text>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View> */}
                
                {/* <View style={styles.progressBar}>
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
                </View> */}
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
                    <View>
                        {/* <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'white'
                                : '#F2F2F2'
                            },
                            styles.contributions
                            ]}>
                            <Text style={[globalStyles.body2, {color: "#5F5F5F"}]}>View Contributions</Text>
                        </Pressable> */}
                    </View>
                </View>
            </View>
            
        </View>
        
    );
}

export default HomeScreen;
