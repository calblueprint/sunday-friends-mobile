import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Pressable, ScrollView, Button, Modal, Image} from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect, useState, useContext } from 'react';
import ViewContainer from '../../components/ViewContainer';
import { Divider, Title } from 'react-native-paper';
import styles from './styles';
import {customStyles} from './styles';
import globalStyles from "../../globalStyles";
import {moment} from 'moment';
import StepIndicator from 'react-native-step-indicator';
import { getAllTiers } from '../../firebase/firestore/tiers';
import { getUser } from '../../firebase/firestore/user';
import userContext from '../../context/userContext';
import { User } from '../../types/schema';
import {List} from 'react-native-paper';
import TransactionsGroup from '../../components/TransactionsGroup/TransactionsGroup';

const defaultLabels = ['100', '200', '300']

const defaultTier = {
    tier1: 100,
    tier2: 200,
    tier3: 300
}

const getCurrentDate=()=>{
    var moment = require('moment');
    return (moment().format('dddd[,] MMMM Do')); 
}

const defaultUser: User = {
    user_id: "",
    address: "",
    created_at: "",
    email: "",
    role: "",
    family_id: 0,
    full_name: "",
    last_active: new Date(),
    parent: false,
    points: 0,
    reward_eligible: false,
    suspended: false,
    phone_number: "",
    transactions: [],
  };

const PersonalScreen = ({navigation}: any) => {

    const [labels, setLabels] = useState(['1000', '2000', '3000']);
    const [user, setUser] = useState(defaultUser);

    
    const userID = useContext(userContext);
    

    useEffect(() => {
        getAllTiers().then((tiers) => {
            // console.log(tiers);
            const newlabels = [];
            newlabels[0] = tiers[0].tier1.toString();
            newlabels[1] = tiers[0].tier2.toString();
            newlabels[2] = tiers[0].tier3.toString();
            setLabels(newlabels);

        getUser(userID).then((currUser) => {
            setUser(currUser);
        })

        })
    }, []);

    const tiersStr = []

    return (
        <View style = {styles.homeContainer}>
            <View style = {styles.dateContainer}>
                <Text style={[globalStyles.body2, {color: '#525454'}]}>{getCurrentDate()}</Text>
            </View>
            <View style = {styles.headline}>
                <Text style={[globalStyles.h3Bold, {color: '#272929'}]}>Morning, Yakob</Text>
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

            {/* <Text style={[styles.initialText, {color: '#272929'}]}>Y</Text> */}

            
            <View style={styles.familyBalanceCardContainer}>
                <View style={styles.topHalfContainer}>
                    <View style = {styles.balanceContainer}>
                        <Text style={[styles.balanceText, {color: "#253C85"}]}>100</Text>
                        <Text style={globalStyles.overline2}>MY BALANCE</Text>
                    </View>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'white'
                                : '#E6ECFE'
                            },
                            styles.contributions
                            ]}>
                            <Text style={[globalStyles.body2Bold, {color: "#5F5F5F"}]}>Learn More</Text>
                        </Pressable>
                </View>
            </View>

            <View style={styles.tranxContainer}>

                <View style = {styles.tranxbar}>
                    <Text style={[globalStyles.overline1]}>FAMILY TRANSACTIONS</Text>
                </View>

                <TransactionsGroup forFamily = {true}>
                </TransactionsGroup>

            </View>
            
        </View>
    );
}

export default PersonalScreen;