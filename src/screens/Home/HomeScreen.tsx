import * as React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { getAllTransactions } from '../../firebase/firestore/transaction';
import { useEffect } from 'react';
import ViewContainer from '../../components/ViewContainer';
import { Divider, Title } from 'react-native-paper';
import styles from './styles';

const HomeScreen = ({navigation}: any) => {
    return (
        <View>
            <View style = {styles.headline}>
                <Text style={styles.title1}>Kim Family</Text>
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
                        <Text style={styles.nameText}>5 People</Text>
                    </View>
                        <Text>Me, Jacob, Cindy, Albert, Charles</Text>
                    </View>
                </View>
            </View>

            <View style={styles.familyBalanceCardContainer}>
                <View style={styles.addContainer}>
                    <View style = {styles.columnContainer}>
                        <Text style={styles.balanceText}>9088</Text>
                        <Text style={styles.nameText}>Account Balance</Text>
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
