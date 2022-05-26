import * as React from 'react';
import { useRef } from 'react';
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
import RBSheet from 'react-native-raw-bottom-sheet';
import StepIndicator from 'react-native-step-indicator';
import { getAllTiers } from '../../firebase/firestore/tiers';
import { getUser } from '../../firebase/firestore/user';
import { AuthenticatedUserContext } from '../../context/userContext';
import { User } from '../../types/schema';
import {List} from 'react-native-paper';
import TransactionsGroup from '../../components/TransactionsGroup/TransactionsGroup';
import LearnMoreModal from '../../components/LearnMoreModal/LearnMoreModal';

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

    const { userUID, setUserUID } = useContext(AuthenticatedUserContext);

    const [userInitial, setuserInitial] = useState("");
    const [personalBalance, setpersonalBalance] = useState(0);
    const refRBSheet = useRef();

    // const fetchPersonalData = async () => {
    //     setuserInitial(user.full_name.toString().slice(0,1));
    //     setpersonalBalance(user.points);
    //     console.log(userInitial);
    // }
    

    useEffect(() => {
        getAllTiers().then((tiers) => {
            // console.log(tiers);
            const newlabels = [];
            newlabels[0] = tiers[0].tier1.toString();
            newlabels[1] = tiers[0].tier2.toString();
            newlabels[2] = tiers[0].tier3.toString();
            setLabels(newlabels);

        getUser(userUID).then((currUser) => {
            setUser(currUser);
            setuserInitial(currUser.full_name.toString().slice(0,1));
            setpersonalBalance(currUser.points);
            // fetchPersonalData();
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
                <Text style={[globalStyles.h3Bold, {color: '#272929'}]}>Morning, {user.full_name.split(' ')[0]}</Text>
                <View style={styles.innerContainer}>
                    <Pressable
                        onPress={()=>navigation.navigate('Profile')}
                    >
                    <View style={styles.addPersonalCircle}>
                        <Text style={[styles.initialText, {color: '#253C85'}]}>{userInitial}</Text>
                    </View>
                    </Pressable>
                </View>
            </View>

            {/* <Text style={[styles.initialText, {color: '#272929'}]}>Y</Text> */}

            
            <View style={styles.familyBalanceCardContainer}>
                <View style={styles.topHalfContainer}>
                    <View style = {styles.balanceContainer}>
                        <Text style={[styles.balanceText, {color: "#253C85"}]}>{user.suspended?'N/A':personalBalance}</Text>
                        <Text style={globalStyles.overline2}>{user.suspended?'ACCOUNT SUSPENDED':'MY BALANCE'}</Text>
                    </View>
                        <Pressable onPress={() => refRBSheet.current.open()}
                        style={({ pressed }) => [
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
                    <Text style={[globalStyles.overline1]}>TRANSACTIONS HISTORY</Text>
                </View>

                <TransactionsGroup forFamily = {false}>
                </TransactionsGroup>

            </View>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={761}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }
                }}
            >
                <LearnMoreModal refRBSheet={refRBSheet}/>
            </RBSheet>
        </View>
    );
}

export default PersonalScreen;