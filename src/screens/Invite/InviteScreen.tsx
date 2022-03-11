import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import RectangularButton from "../../components/RectangularButton";
import { default as styles } from "./styles";
import MemberCard from "../../components/MemberCard/MemberCard";
import InviteRadioButton from "../../components/InviteRadioButton";
import SvgIcon from "../../../assets/SvgIcon";

const InviteScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <GestureRecognizer onSwipeDown={() => setModalVisible(false)}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalTopContainer}>
              <Pressable>
                <SvgIcon type="modal_x" />
              </Pressable>
            </View>
            <Text style={styles.modalTitle}>
              Add your family member's details
            </Text>
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
            <RectangularButton
              onPress={() => setModalVisible(!modalVisible)}
              text="add member"
              buttonStyle={{ backgroundColor: "#C4C4C4" }}
              textStyle={{ color: "#525454" }}
            />
          </View>
        </Modal>
      </GestureRecognizer>

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
          onPress={() => setModalVisible(true)}
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
    </View>
  );
};

export default InviteScreen;
