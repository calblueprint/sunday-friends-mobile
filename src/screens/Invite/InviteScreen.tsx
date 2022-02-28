import * as React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import RectangularButton from "../../components/RectangularButton";
import { default as styles } from "./styles";
import MemberCard from "../../components/MemberCard/MemberCard";
import ViewContainer from "../../components/ViewContainer";

const InviteScreen = ({ navigation }: any) => {
  return (
    <ViewContainer>
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
      <RectangularButton
        onPress={() => navigation.navigate("LoginStack", { screen: "Invite" })}
        text="review"
        buttonStyle={{ backgroundColor: "#C4C4C4" }}
        textStyle={{ color: "#525454" }}
      />
      <View style={styles.separator} />
    </ViewContainer>
  );
};

export default InviteScreen;
