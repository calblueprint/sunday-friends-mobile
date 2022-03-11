import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  GestureResponderEvent,
} from "react-native";

const InviteRadioButton = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "80%",
      marginBottom: "8%",
      justifyContent: "space-between",
    },

    selected: {
      width: 93,
      height: 96,
      backgroundColor: "pink",
    },

    unselected: {
      width: 93,
      height: 96,
      backgroundColor: "#EBEBEB",
    },
  });

  const [userOption, setUserOption] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable
        style={0 == userOption ? styles.selected : styles.unselected}
        onPress={() => setUserOption(0)}
      >
        <Text>dependent</Text>
      </Pressable>
      <Pressable
        style={1 == userOption ? styles.selected : styles.unselected}
        onPress={() => setUserOption(1)}
      >
        <Text>parent</Text>
      </Pressable>
      <Pressable
        style={2 == userOption ? styles.selected : styles.unselected}
        onPress={() => setUserOption(2)}
      >
        <Text>child</Text>
      </Pressable>
    </View>
  );
};

export default InviteRadioButton;
