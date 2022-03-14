import * as React from "react";
import { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { default as styles } from "./styles";

const InviteRadioButton = () => {
  const [userOption, setUserOption] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable
        style={0 == userOption ? styles.selected : styles.unselected}
        onPress={() => setUserOption(0)}
      >
        <Image
          style={styles.parent}
          source={require("../../../assets/images/parentSmiley.png")}
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
            source={require("../../../assets/images/childSmiley.png")}
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
            source={require("../../../assets/images/childSmiley.png")}
          />
        </View>
        <Text style={styles.statusText}>Dependent</Text>
      </Pressable>
    </View>
  );
};

export default InviteRadioButton;
