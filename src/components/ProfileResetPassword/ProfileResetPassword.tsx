import React, { useState } from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import { verify } from "crypto";

export const ProfileResetPassword = ({ visible, setVisible, user }: any) => {
  const [email, onChangeEmail] = useState("");
  const [code, onChangeCode] = useState("");
  const [newPW, onChangeNewPW] = useState("");
  const [confirmPW, onChangeConfirmPW] = useState("");
  const [edited, setEdited] = useState(true);
  const [currScreen, setCurrScreen] = useState("reset");

  const reset = () => {
    onChangeEmail("");
    onChangeCode("");
    onChangeNewPW("");
    onChangeConfirmPW("");
    setCurrScreen("reset");
    setEdited(false);
    setVisible(false);
  };

  const resetModal = () => {
    return (
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.topGreyLine} />
          <Pressable style={styles.exitPressable} onPress={() => reset()}>
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
          <Pressable style={styles.exitPressable} onPress={() => reset()}>
            <SvgIcon type="greyX" />
          </Pressable>
          <Text style={[globalStyles.h2, styles.resetPasswordTitle]}>
            Verify Email
          </Text>
          <Text style={[globalStyles.h4, styles.subText1]}>
            Enter the 6-digit code sent to {email}
          </Text>
          <TextInput
            style={[globalStyles.body1, styles.verifyInput]}
            placeholder="Verification Code"
            keyboardType="numeric"
            onChangeText={(e) => [onChangeCode(e), setEdited(true)]}
            value={code}
          />
          <Pressable style={styles.resendPressable}>
            <Text style={globalStyles.overline2}>RESEND CODE</Text>
          </Pressable>
          <Pressable
            style={
              edited
                ? styles.verifyContinuePressableAllowed
                : styles.verifyContinuePressable
            }
            onPress={() => {
              edited ? setCurrScreen("setNew") : null;
              setEdited(false);
            }}
          >
            <Text style={globalStyles.overline2}>CONTINUE</Text>
          </Pressable>
        </View>
      </Modal>
    );
  };

  const setNewPassword = () => {
    return (
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.topGreyLine} />
          <Pressable style={styles.exitPressable} onPress={() => reset()}>
            <SvgIcon type="greyX" />
          </Pressable>
          <Text style={[globalStyles.h2, styles.resetPasswordTitle]}>
            Set New Password
          </Text>
          <TextInput
            style={[globalStyles.body1, styles.setNewInput]}
            placeholder="New Password"
            onChangeText={(e) => [onChangeNewPW(e), setEdited(true)]}
            value={newPW}
          />
          <TextInput
            style={[globalStyles.body1, styles.confirmNewInput]}
            placeholder="Confirm New Password"
            onChangeText={(e) => [onChangeConfirmPW(e), setEdited(true)]}
            value={confirmPW}
            caretHidden={true}
          />
          <Pressable
            style={
              edited && newPW == confirmPW
                ? styles.verifyContinuePressableAllowed
                : styles.verifyContinuePressable
            }
          >
            <Text
              style={globalStyles.overline2}
              onPress={() =>
                newPW == confirmPW ? setCurrScreen("success") : null
              }
            >
              RESET PASSWORD
            </Text>
          </Pressable>
        </View>
      </Modal>
    );
  };

  const success = () => {
    return (
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.topGreyLine} />
          <Pressable style={styles.exitPressable} onPress={() => reset()}>
            <SvgIcon type="greyX" />
          </Pressable>
          <Text style={[globalStyles.h2, styles.resetPasswordTitle]}>
            Success!
          </Text>
          <Text style={[globalStyles.h4, styles.subText1]}>
            Your new password was successfully set.
          </Text>
          <Pressable style={styles.closePressable} onPress={() => reset()}>
            <Text style={globalStyles.overline2}>CLOSE</Text>
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
  if (currScreen == "setNew") {
    return setNewPassword();
  }
  if (currScreen == "success") {
    return success();
  }
  return null;
};
