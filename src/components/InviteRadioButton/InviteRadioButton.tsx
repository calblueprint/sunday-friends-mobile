import * as React from "react";
import { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { default as styles } from "./styles";

const InviteRadioButton = ({ setStatus }: any) => {
  const [userOption, setUserOption] = useState(0);

  const handlePress = (option: number) => {
    setUserOption(option);
    if (option == 0) {
      setStatus("Parent");
    }
    if (option == 1) {
      setStatus("Child");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={0 == userOption ? styles.selected : styles.unselected}
        onPress={() => handlePress(0)}
      >
        <Image
          style={styles.parent}
          source={require("../../../assets/images/parentSmiley.png")}
        />
        <Text style={styles.statusText}>Parent</Text>
      </Pressable>
      <Pressable
        style={1 == userOption ? styles.selected : styles.unselected}
        onPress={() => handlePress(1)}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.child}
            source={require("../../../assets/images/childSmiley.png")}
          />
        </View>
        <Text style={styles.statusText}>Child</Text>
      </Pressable>
    </View>
  );
};

export default InviteRadioButton;
