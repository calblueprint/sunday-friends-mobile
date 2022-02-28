import * as React from "react";
import { StyleSheet, View, Text, Pressable, GestureResponderEvent, ViewStyle } from "react-native";

const RectangularButton = ({ text, onPress, buttonStyle, textStyle }: { 
  text: string, 
  onPress: (event: GestureResponderEvent) => void,
  buttonStyle: any,
  textStyle: any,
 }) => {
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
    <Pressable onPress={onPress} style={[styles.buttonContainer, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default RectangularButton;
