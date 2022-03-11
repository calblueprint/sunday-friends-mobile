import * as React from "react";
import { useState, useRef } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import RectangularButton from "../../components/RectangularButton";
import { default as styles } from "./styles";
import MemberCard from "../../components/MemberCard/MemberCard";
import InviteRadioButton from "../../components/InviteRadioButton";
import RBSheet from "react-native-raw-bottom-sheet";

const InviteScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("");
  const refRBSheet = useRef();

  const handleAdd = () => {
    //todo connect to backend
    refRBSheet.current.close();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>You're in charge!</Text>
      <Text style={styles.title2}>Invite members to Kim Family</Text>
      <ScrollView style={styles.scrollContainer}>
        <MemberCard
          name="Yakob Kim"
          head={true}
          email="yakobkimiscool@gmail.com"
          status="hi"
        />
        <Pressable
          style={styles.backgroundContainer}
          onPress={() => refRBSheet.current.open()}
        >
          <View style={styles.addContainer}>
            <View style={styles.addCircle}>
              <Text style={styles.add}>+</Text>
            </View>
            <View style={styles.addInnerContainer}>
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={600}
        customStyles={{
          container: {
            alignItems: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <Text style={styles.modalTitle}>Add your family member's details</Text>
        <Text style={styles.modalText}>full name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.modalText}>email address</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.modalText}>family relationship</Text>
        <InviteRadioButton />
        <Pressable onPress={() => handleAdd()} style={styles.rectangularButton}>
          <Text style={styles.rectangularButtonText}>add member</Text>
        </Pressable>
      </RBSheet>
    </View>
  );
};

export default InviteScreen;
