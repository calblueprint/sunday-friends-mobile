import * as React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default function MemberCard({
  name,
  head,
  email,
  status,
}: {
  name: string;
  head: boolean;
  email: string;
  status: string;
}) {
  const styles = StyleSheet.create({
    nameText: {
      fontFamily: "Avenir",
      fontWeight: "800",
      fontSize: 14,
    },

    container: {
      flexDirection: "row",
      width: "80%",
      marginVertical: "6%",
    },

    circle: {
      backgroundColor: "#C4C4C4",
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
    },

    rowContainer: {
      flexDirection: "row",
    },

    innerContainer: {
      alignSelf: "center",
      marginLeft: "3%",
    },
  });

  return (
    <Pressable style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.nameText}>{head ? " (You)" : ""}</Text>
        </View>
        <Text>{email}</Text>
      </View>
    </Pressable>
  );
}
