import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Pressable, Button, Modal, Image, ScrollView } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect, useState, useContext } from 'react';
import ViewContainer from '../../components/ViewContainer';
import { Divider, Title } from 'react-native-paper';
import styles from './styles';
import { customStyles } from './styles';
import globalStyles from "../../globalStyles";
import { moment } from 'moment';
import StepIndicator from 'react-native-step-indicator';
import { getAllTiers } from '../../firebase/firestore/tiers';
import { getUser } from '../../firebase/firestore/user';
import { AuthenticatedUserContext } from '../../context/userContext';
import { User } from '../../types/schema';
import { List } from 'react-native-paper';
import TransactionsGroup from '../../components/TransactionsGroup/TransactionsGroup';
import { getFamilyById } from "../../firebase/firestore/family";



const defaultTier = {
    tier1: 100,
    tier2: 200,
    tier3: 300
}

const getCurrentDate = () => {
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



const FamilyScreen = ({ navigation }: any) => {

    const [labels, setLabels] = useState(['1000', '2000', '3000']);
    const { userUID, setUserUID } = useContext(AuthenticatedUserContext);
    const [user, setUser] = useState(defaultUser);
    const [familyName, setFamilyName] = useState("");
    const [userInitial, setuserInitial] = useState("");
    const [familyBalance, setFamilyBalance] = useState(0);
    const [tierStep, settierStep] = useState(0);
    const [tierName, settierName] = useState("");
    const [tierDescription, settierDescription] = useState("");

    const fetchFamilyData = async () => {
        // const family = await getFamilyById(user.family_id.toString())
        // setFamilyName(family.family_name.toString())
        // setuserInitial(user.full_name.toString().slice(0,1))
        // setFamilyBalance(family.total_points)
        // console.log(familyName)
    }


    useEffect(() => {
        getAllTiers().then((tiers) => {
            const newlabels = [];
            newlabels[0] = tiers[0].tier1.toString();
            newlabels[1] = tiers[0].tier2.toString();
            newlabels[2] = tiers[0].tier3.toString();
            setLabels(newlabels);

            getUser(userUID).then((currUser) => {
                setUser(currUser);
                // fetchFamilyData();
                const family = getFamilyById(currUser.family_id.toString()).then((currFam) => {
                    setFamilyName(currFam.family_name.toString())
                    setuserInitial(currUser.full_name.toString().slice(0, 1))
                    setFamilyBalance(currFam.total_points)
                    console.log(familyName)
                })
                // setFamilyName(family.family_name.toString())
                // setuserInitial(user.full_name.toString().slice(0,1))
                // setFamilyBalance(family.total_points)
                // console.log(familyName)
            })
            if (familyBalance < tiers[0].tier1) {
                settierStep(0)
                settierName("Tier 1: " + tiers[0].tier1title)
            }
            if (familyBalance >= tiers[0].tier2 && familyBalance < tiers[0].tier3) {
                settierStep(1)
                console.log(tiers[0].tier2title)
                settierName("Tier 2: " + tiers[0].tier2title)
            }
            if (familyBalance >= tiers[0].tier3) {
                settierStep(2)
                settierName("Tier 3: " + tiers[0].tier3title)
            }
        })
    }, []);


    const tiersStr = []

    return (
        <View style={styles.homeContainer}>
            <ScrollView style={styles.contentContainer} contentContainerStyle={styles.alignment}>

                <View style={styles.dateContainer}>
                    <Text style={[globalStyles.body2, { color: '#525454' }]}>{getCurrentDate()}</Text>
                </View>
                <View style={styles.headline}>
                    <Text style={[globalStyles.h3Bold, { color: '#272929' }]}>{familyName} Family</Text>
                    <View style={styles.innerContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <View style={styles.addPersonalCircle}>
                                <Text style={[styles.initialText, { color: '#253C85' }]}>{userInitial}</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.familyCardContainer}>
                    <View style={styles.addContainer}>
                        <View style={styles.stackOfSmileys}>
                            <Image style={[styles.profileImage, { position: 'absolute', left: 0 }]} source={require('../../../assets/images/parentSmiley.png')} />
                            <Image style={[styles.profileImage, { position: 'absolute', left: 27 }]} source={require('../../../assets/images/headSmiley.png')} />
                            <Image style={[styles.profileImage, { position: 'absolute', left: 57 }]} source={require('../../../assets/images/childSmiley.png')} />
                            <Image style={[styles.profileImage, { position: 'absolute', left: 87 }]} source={require('../../../assets/images/childSmiley.png')} />
                        </View>
                        <View style={styles.innerContainer}>
                            <View style={styles.addPersonalCircle}>
                                <Pressable
                                    onPress={() => navigation.navigate('Profile')}
                                >
                                    <Text style={[styles.initialText, { color: '#253C85' }]}>Y</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.familyBalanceCardContainer}>
                    <View style={styles.topHalfContainer}>
                        <View style={styles.balanceContainer}>
                            <Text style={[styles.balanceText, { color: "#253C85" }]}>{familyBalance}</Text>
                            <Text style={globalStyles.overline2}>FAMILY BALANCE</Text>
                        </View>
                    </View>

                    <View style={styles.familyBalanceCardContainer}>
                        <View style={styles.topHalfContainer}>
                            <View style={styles.balanceContainer}>
                                <Text style={[styles.balanceText, { color: "#253C85" }]}>200</Text>
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
                                <Text style={[globalStyles.body2Bold, { color: "#5F5F5F" }]}>Learn More</Text>
                            </Pressable>
                        </View>

                        <View style={styles.progressBar}>
                            <StepIndicator
                                stepCount={3}
                                customStyles={customStyles}
                                currentPosition={0}
                                labels={labels}
                            />
                        </View>

                        <View style={styles.progressBar}>
                            <StepIndicator
                                stepCount={3}
                                customStyles={customStyles}
                                currentPosition={tierStep}
                                labels={labels}
                            />

                        </View>
                        <View style={styles.buttomBar}>
                            <View style={styles.tierContainer}>
                                <View style={styles.tierBox}>
                                    <Text style={[styles.tierText, { color: "#253C85" }]}>{tierName}</Text>
                                </View>
                                <View style={styles.tierOptionsContainer}>
                                    <Pressable style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? 'black'
                                                : '#F6F6F6'
                                        },
                                        styles.optionsContainer
                                    ]}>
                                        <Text style={[globalStyles.body2Bold, { color: '#A9A9A9' }]}>What Can I Get?</Text>
                                    </Pressable>
                                </View>
                                {/* <View style={styles.columnContainer}>
                            <View style={styles.rowContainer}>
                                <Text style={[styles.itemsText, {color: "#525454"}]}>[ICON] </Text>
                                <Text style={[styles.itemsText, {color: "#525454"}]}>Bottle water, can food, fresh food</Text>
                            </View>
                            <View style={styles.columnContainer}>
                                <View style={styles.rowContainer}>
                                    <Text style={[styles.itemsText, { color: "#525454" }]}>[ICON] </Text>
                                    <Text style={[styles.itemsText, { color: "#525454" }]}>Bottle water, can food, fresh food</Text>
                                </View>
                                <View style={styles.rowContainer}>
                                    <Text style={[styles.itemsText, { color: "#525454" }]}>[ICON] </Text>
                                    <Text style={[styles.itemsText, { color: "#525454" }]}>Hygeine products, toiletries</Text>
                                </View>
                            </View>
                        </View> */}
                            </View>
                        </View>
                        <View style={styles.tranxContainer}>

                            <View style={styles.tranxbar}>
                                <Text style={[globalStyles.overline1]}>FAMILY TRANSACTIONS</Text>
                            </View>

                            <TransactionsGroup forFamily={true}>
                            </TransactionsGroup>

                        </View>
                    </ScrollView>
                </View>

                );
}

                export default FamilyScreen;