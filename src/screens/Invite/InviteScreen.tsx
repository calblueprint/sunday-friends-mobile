import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, View, Text, Pressable } from "react-native";
import { Title } from "react-native-paper";
import EditScreenInfo from "../../components/EditScreenInfo";
import ViewContainer from "../../components/ViewContainer";
import RectangularButton from "../../components/RectangularButton";
import { default as styles } from "./styles";
import globalStyles from "../../globalStyles";

const InviteScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title1}>You're in charge!</Text>
      <Text style={styles.title2}>Invite members to Kim Family</Text>
      <RectangularButton text="next" />
    </View>
  );
};

export default InviteScreen;
