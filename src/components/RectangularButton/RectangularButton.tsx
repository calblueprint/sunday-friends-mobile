import * as React from "react";
import {
  Text,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { default as styles } from "./styles";



const RectangularButton = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
}: {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle: any;
  textStyle: any;
}) => {
  
  return (
    <Pressable onPress={onPress} style={[styles.buttonContainer, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default RectangularButton;
