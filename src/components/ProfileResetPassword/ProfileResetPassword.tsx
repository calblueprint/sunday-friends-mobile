import React, { useState } from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import { verify } from "crypto";

export const ProfileResetPassword = ({ visible, setVisible, user }: any) => {
  const [email, onChangeEmail] = useState("");
  const [code, onChangeCode] = useState("");
  const [edited, setEdited] = useState(true);
  const [currScreen, setCurrScreen] = useState("reset");

  const resetModal = () => {
    return (
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.topGreyLine} />
          <Pressable
            style={styles.exitPressable}
            onPress={() => [
              setVisible(false),
              onChangeEmail(""),
              setEdited(false),
            ]}
          >
            <SvgIcon type="greyX" />
          </Pressable>
          <Text style={[globalStyles.h2, styles.resetPasswordTitle]}>
            Reset Password
          </Text>
          <Text style={[globalStyles.h4, styles.subText1]}>
            Enter the email connected to your account to reset your password.
          </Text>
          <Text style={[globalStyles.body1, styles.subText2]}>
            A text containing a 6-digit code will be sent
          </Text>
          <TextInput
            style={[globalStyles.body1, styles.emailInput]}
            placeholder="Email"
            onChangeText={(e) => [onChangeEmail(e), setEdited(true)]}
            value={email}
          />
          <Pressable
            style={
              edited
                ? styles.resetContinuePressableAllowed
                : styles.resetContinuePressable
            }
            onPress={() => {
              edited ? setCurrScreen("verify") : null;
              setEdited(false);
            }}
          >
            <Text style={globalStyles.overline2}>CONTINUE</Text>
          </Pressable>
        </View>
      </Modal>
    );
  };

  const verifyModal = () => {
    return (
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.topGreyLine} />
          <Pressable
            style={styles.exitPressable}
            onPress={() => [
              setVisible(false),
              onChangeCode(""),
              onChangeEmail(""),
              setEdited(false),
              setCurrScreen("reset"),
            ]}
          >
            <SvgIcon type="greyX" />
          </Pressable>
          <Text style={[globalStyles.h2, styles.resetPasswordTitle]}>
            Verify Email
          </Text>
          <Text style={[globalStyles.h4, styles.subText1]}>
            Enter the 6-digit code sent to {email}
          </Text>
          <TextInput
            style={[globalStyles.body1, styles.emailInput]}
            placeholder="Verification Code"
            keyboardType="numeric"
            onChangeText={(e) => [onChangeCode(e), setEdited(true)]}
            value={code}
          />
          <Pressable
            style={styles.resendPressable}
            //onPress={() => setCurrScreen("setNew")}
          >
            <Text style={globalStyles.overline2}>RESEND CODE</Text>
          </Pressable>
          <Pressable
            style={
              edited
                ? styles.verifyContinuePressableAllowed
                : styles.verifyContinuePressable
            }
            //onPress={() => setCurrScreen("setNew")}
          >
            <Text style={globalStyles.overline2}>CONTINUE</Text>
          </Pressable>
        </View>
      </Modal>
    );
  };

  if (currScreen == "reset") {
    return resetModal();
  }
  if (currScreen == "verify") {
    return verifyModal();
  }
  return null;
};
