import React from "react";
import { Pressable, View, Text } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const ProfileSwitchItem = ({ name, signedIn }: any) => {
  if (signedIn) {
    return (
      <View style={styles.flatListItem}>
        <Pressable style={styles.flatListImagePressable}>
          <SvgIcon type="headSmiley" />
        </Pressable>
        <View style={styles.flatlistName}>
          <Text style={globalStyles.body1Bold}>{name}</Text>
        </View>
        <Pressable style={styles.signedIn}>
          <Text style={globalStyles.body2}>Signed In</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.flatListItem}>
      <Pressable style={styles.flatListImagePressable}>
        <SvgIcon type="dependentSmiley" />
      </Pressable>
      <View style={styles.flatlistName}>
        <Text style={globalStyles.body1Bold}>{name}</Text>
      </View>
      <Pressable style={styles.switch}>
        <Text style={styles.body2WHITE}>Switch</Text>
      </Pressable>
    </View>
  );
};

export default ProfileSwitchItem;
