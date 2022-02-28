import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, ScrollView } from "react-native";
import RectangularButton from "../../components/RectangularButton";
import { default as styles } from "./styles";
import globalStyles from "../../globalStyles";
import MemberCard from "./MemberCard";

const InviteScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title1}>You're in charge!</Text>
      <Text style={styles.title2}>Invite members to Kim Family</Text>
      <ScrollView style={styles.scrollContainer}>
        <MemberCard
          name="Yakob Kim"
          head={true}
          email="yakobkimiscool@gmail.com"
          status="hi"
        />
        <Pressable style={styles.backgroundContainer}>
          <View style={styles.addContainer}>
            <View style={styles.addCircle}>
              <Text style={styles.add}>+</Text>
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.nameText}>Add a member</Text>
              </View>
              <Text>Invite parents and/or children</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
      <RectangularButton text="review" />
      <View style={styles.separator} />
    </View>
  );
};

export default InviteScreen;
