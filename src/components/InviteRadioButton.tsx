import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

const InviteRadioButton = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "80%",
      height: "20%",
      marginBottom: "13%",
      justifyContent: "space-between",
    },

    selected: {
      width: "30%",
      backgroundColor:
        "linear-gradient(0deg, rgba(230, 236, 254, 0.4), rgba(230, 236, 254, 0.4)), #FFFFFF",
      borderWidth: 2,
      borderColor: "#7F93D1",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    unselected: {
      width: "30%",
      backgroundColor: "#FFFFFF",
      borderWidth: 2,
      borderColor: "#F2F2F2",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    parent: {
      width: 50,
      height: 50,
      resizeMode: "contain",
    },

    imageContainer: {
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },

    child: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },

    dependent: {
      width: 28,
      height: 28,
      resizeMode: "contain",
    },

    statusText: {
      fontFamily: "Avenir",
      fontSize: 14,
      fontWeight: "400",
      color: "#525454",
      marginTop: "10%",
    },
  });

  const [userOption, setUserOption] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable
        style={0 == userOption ? styles.selected : styles.unselected}
        onPress={() => setUserOption(0)}
      >
        <Image
          style={styles.parent}
          source={require("../../assets/images/parentSmiley.png")}
        />
        <Text style={styles.statusText}>Parent</Text>
      </Pressable>
      <Pressable
        style={1 == userOption ? styles.selected : styles.unselected}
        onPress={() => setUserOption(1)}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.child}
            source={require("../../assets/images/childSmiley.png")}
          />
        </View>
        <Text style={styles.statusText}>Child</Text>
      </Pressable>
      <Pressable
        style={2 == userOption ? styles.selected : styles.unselected}
        onPress={() => setUserOption(2)}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.dependent}
            source={require("../../assets/images/childSmiley.png")}
          />
        </View>
        <Text style={styles.statusText}>Dependent</Text>
      </Pressable>
    </View>
  );
};

export default InviteRadioButton;
