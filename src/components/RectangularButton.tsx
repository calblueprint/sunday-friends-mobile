import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const RectangularButton = ({ text }: { text: string }) => {
  const styles = StyleSheet.create({
    buttonText: {
      fontFamily: "Avenir",
      fontWeight: "900",
      fontSize: 14,
      textTransform: "uppercase",
      alignSelf: "center",
      color: "#525454",
    },

    buttonContainer: {
      backgroundColor: "#C4C4C4",
      width: "80%",
      height: "5%",
      justifyContent: "center",
    },
  });

  return (
    <Pressable style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default RectangularButton;
