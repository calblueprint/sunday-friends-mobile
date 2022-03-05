import * as React from "react";
import { View, Text } from "react-native";
import { default as styles } from "./styles";

const MemberCard = ({
  name,
  head,
  email,
  status,
}: {
  name: string;
  head: boolean;
  email: string;
  status: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.nameText}>{head ? " (You)" : ""}</Text>
        </View>
        <Text>{email}</Text>
      </View>
    </View>
  );
};

export default MemberCard;
