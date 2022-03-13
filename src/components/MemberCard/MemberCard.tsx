import * as React from "react";
import { View, Text, Image } from "react-native";
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
  const icon = (status: string) => {
    if (status == "head") {
      return (
        <Image
          style={styles.head}
          source={require("../../../assets/images/headSmiley.png")}
        />
      );
    }
    if (status == "parent") {
      return (
        <Image
          style={styles.parent}
          source={require("../../../assets/images/parentSmiley.png")}
        />
      );
    }
    if (status == "child") {
      return (
        <View style={styles.imageContainer}>
          <Image
            style={styles.child}
            source={require("../../../assets/images/childSmiley.png")}
          />
        </View>
      );
    }
    if (status == "dependent") {
      return (
        <View style={styles.imageContainer}>
          <Image
            style={styles.dependent}
            source={require("../../../assets/images/childSmiley.png")}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {icon(status)}
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
