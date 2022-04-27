import * as React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import RectangularButton from "../../components/RectangularButton/RectangularButton";
import { AuthenticatedUserContext } from "../../context/userContext";
import { getUser } from "../../firebase/firestore/user";
import { getFamily } from "../../firebase/firestore/family";
import { Z_DEFAULT_STRATEGY } from "zlib";
import globalStyles from "../../globalStyles";
import styles from "../Invite/styles";
import SvgIcon from "../../../assets/SvgIcon";

const AllSetInviteScreen = ({ navigation }: any) => {
  const { userUID, setUserUID } = useContext(AuthenticatedUserContext);
  const [familyName, setFamilyName] = useState("");

  useEffect(() => {
    getUser(userUID).then((user) => {
      getFamily(user.family_id.toString()).then((family) => {
        setFamilyName(family.family_name);
      });
    });
  }, []);

  return (
    <View style={styles.container2}>
      <View style={styles.logoContainer}>
        <SvgIcon type="sfLogo" />
      </View>

      <View style={styles.allSetContainer}>
        <Text style={globalStyles.h4}>All done!</Text>
        <View style={styles.separator2} />
        <Text style={globalStyles.h1}>The {familyName} Family is all set!</Text>
        <View style={styles.separator2} />
        <View style={styles.separator2} />
        <Text style={globalStyles.body1}>
          Check your inbox for a confirmation email.
        </Text>
      </View>
      <RectangularButton
        onPress={() => navigation.navigate("Root", { screen: "Home" })}
        text="finish"
        buttonStyle={{ backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
      />
    </View>
  );
};

export default AllSetInviteScreen;
