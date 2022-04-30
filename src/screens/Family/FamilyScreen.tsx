import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  Button,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { getAllTransactions } from "../../firebase/firestore/transaction";
import { useEffect, useState, useContext } from "react";
import ViewContainer from "../../components/ViewContainer";
import { Divider, Title } from "react-native-paper";
import styles from "./styles";
import { customStyles } from "./styles";
import globalStyles from "../../globalStyles";
import { moment } from "moment";
import StepIndicator from "react-native-step-indicator";
import { getAllTiers } from "../../firebase/firestore/tiers";
import { getUser } from "../../firebase/firestore/user";
import { AuthenticatedUserContext } from "../../context/userContext";
import { User } from "../../types/schema";
import { List } from "react-native-paper";
import TransactionsGroup from "../../components/TransactionsGroup/TransactionsGroup";

const defaultLabels = ["100", "200", "300"];

const defaultTier = {
  tier1: 100,
  tier2: 200,
  tier3: 300,
};

const getCurrentDate = () => {
  var moment = require("moment");
  return moment().format("dddd[,] MMMM Do");
};

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
  const [labels, setLabels] = useState(["1000", "2000", "3000"]);
  const { userUID, setUserUID } = useContext(AuthenticatedUserContext);
  const [user, setUser] = useState(defaultUser);

  //const userID = useContext(userContext);

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
      });
    });
  }, []);

  const tiersStr = [];

  return (
    <View style={styles.homeContainer}>
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.alignment}
      >
        <View style={styles.dateContainer}>
          <Text style={[globalStyles.body2, { color: "#525454" }]}>
            {getCurrentDate()}
          </Text>
        </View>
        <View style={styles.headline}>
          <Text style={[globalStyles.h3Bold, { color: "#272929" }]}>
            Kim Family
          </Text>
          <View style={styles.innerContainer}>
            <Pressable onPress={() => navigation.navigate("Profile")}>
              <View style={styles.addPersonalCircle}>
                <Text style={[styles.initialText, { color: "#253C85" }]}>
                  Y
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.familyCardContainer}>
          <View style={styles.addContainer}>
            <View style={styles.stackOfSmileys}>
              <Image
                style={[styles.profileImage, { position: "absolute", left: 0 }]}
                source={require("../../../assets/images/parentSmiley.png")}
              />
              <Image
                style={[
                  styles.profileImage,
                  { position: "absolute", left: 27 },
                ]}
                source={require("../../../assets/images/headSmiley.png")}
              />
              <Image
                style={[
                  styles.profileImage,
                  { position: "absolute", left: 57 },
                ]}
                source={require("../../../assets/images/childSmiley.png")}
              />
              <Image
                style={[
                  styles.profileImage,
                  { position: "absolute", left: 90 },
                ]}
                source={require("../../../assets/images/childSmiley.png")}
              />
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.rowContainer}>
                <Text style={[globalStyles.body1Bold, { color: "#5F5F5F" }]}>
                  5 People
                </Text>
              </View>
              <Text style={[globalStyles.body1, { color: "#5F5F5F" }]}>
                Me, Jacob, Cindy, Albe...
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.familyBalanceCardContainer}>
          <View style={styles.topHalfContainer}>
            <View style={styles.balanceContainer}>
              <Text style={[styles.balanceText, { color: "#253C85" }]}>
                200
              </Text>
              <Text style={globalStyles.overline2}>FAMILY BALANCE</Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "white" : "#E6ECFE",
                },
                styles.contributions,
              ]}
            >
              <Text style={[globalStyles.body2Bold, { color: "#5F5F5F" }]}>
                View Contributions
              </Text>
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
          <View style={styles.buttomBar}>
            <View style={styles.tierContainer}>
              <View style={styles.tierBox}>
                <Text style={[globalStyles.overline1, { color: "#FFFFFF" }]}>
                  TIER 1
                </Text>
              </View>
              <View style={styles.columnContainer}>
                <View style={styles.rowContainer}>
                  <Text style={[styles.itemsText, { color: "#525454" }]}>
                    [ICON]{" "}
                  </Text>
                  <Text style={[styles.itemsText, { color: "#525454" }]}>
                    Bottle water, can food, fresh food
                  </Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text style={[styles.itemsText, { color: "#525454" }]}>
                    [ICON]{" "}
                  </Text>
                  <Text style={[styles.itemsText, { color: "#525454" }]}>
                    Hygeine products, toiletries
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.tierOptionsContainer}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "white" : "#F6F6F6",
                  },
                  styles.optionsContainer,
                ]}
              >
                <Text style={[globalStyles.body2Bold, { color: "#A9A9A9" }]}>
                  Tier Options
                </Text>
              </Pressable>
            </View>
          </View>
          <View></View>
        </View>
        <View style={styles.tranxContainer}>
          <View style={styles.tranxbar}>
            <Text style={[globalStyles.overline1]}>FAMILY TRANSACTIONS</Text>
          </View>

          <TransactionsGroup forFamily={true}></TransactionsGroup>
        </View>
      </ScrollView>
    </View>
  );
};

export default FamilyScreen;
