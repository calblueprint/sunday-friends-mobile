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
                <Text style={globalStyles.h3Bold}>Kim Family</Text>
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
                            <Text style={globalStyles.body1Bold}>5 People</Text>
                        </View>
                        <Text style={globalStyles.body1}>Me, Jacob, Cindy, Albert, Charles</Text>
                    </View>
                </View>
            </View>

            <View style={styles.familyBalanceCardContainer}>
                <View style={styles.topHalfContainer}>
                    <View style = {styles.balanceContainer}>
                        <Text style={styles.balanceText}>9088</Text>
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
                            <Text style={globalStyles.body2Bold}>Tier Options</Text>
                        </Pressable>
                </View>
                <View style={styles.progressBar}>
                    <View style={styles.addBar} />
                    <View style={styles.levels}>
                        <View style={styles.columnContainer}>
                            <View style={styles.addLevelCircleCurrent}>
                                <Text style={[globalStyles.body2, {color:'white'}]}>1</Text>
                                </View>
                            <Text style={globalStyles.body2}>2000</Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <View style={styles.addLevelCircle}>
                                <Text style={globalStyles.body2}>2</Text>
                                </View>
                            <Text style={globalStyles.body2}>2000</Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <View style={styles.addLevelCircle}>
                                <Text style={globalStyles.body2}>3</Text>
                                </View>
                            <Text style={globalStyles.body2}>2000</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttomBar}>
                    <View style={styles.rowContainer}>
                        <Text style={globalStyles.body2Bold}>Tire 1: </Text>
                        <Text style={globalStyles.body2}>The Basic Family</Text>
                    </View>
                    <View style={styles.contributions}>
                        <Text style={globalStyles.body2}>View Contributions</Text>
                    </View>

                </View>
            </View>
            
        </View>
        
    );
}

export default HomeScreen;

// import * as React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { View, Text, Pressable } from "react-native";
// import RectangularButton from "../../components/RectangularButton";
// import { default as styles } from "./styles";
// import globalStyles from "../../globalStyles";
// import MemberCard from "./MemberCard";

// const InviteScreen = () => {
//   return (
//     <View style={globalStyles.container}>
//       <Text style={styles.title1}>You're in charge!</Text>
//       <Text style={styles.title2}>Invite members to Kim Family</Text>
//       <MemberCard
//         name="Yakob Kim"
//         head={true}
//         email="yakobkimiscool@gmail.com"
//         status="hi"
//       />
    //   <Pressable style={styles.backgroundContainer}>
    //     <View style={styles.addContainer}>
    //       <View style={styles.addCircle} />
    //       <View style={styles.innerContainer}>
    //         <View style={styles.rowContainer}>
    //           <Text style={styles.nameText}>Add a member</Text>
    //         </View>
    //         <Text>Invite parents and/or children</Text>
    //       </View>
    //     </View>
    //   </Pressable>

//       <RectangularButton text="review" />
//     </View>
//   );
// };

// export default InviteScreen;
