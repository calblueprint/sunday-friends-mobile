import React, { useState } from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text, Linking } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import emailjs, { init } from "@emailjs/browser";

export const ProfileResetPassword = ({ visible, setVisible, user }: any) => {
  const [email, onChangeEmail] = useState("");
  const [code, onChangeCode] = useState("");
  const [newPW, onChangeNewPW] = useState("");
  const [confirmPW, onChangeConfirmPW] = useState("");
  const [edited, setEdited] = useState(false);
  const [currScreen, setCurrScreen] = useState("reset");
  const [currPin, setCurrPin] = useState(0);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const reset = () => {
    onChangeEmail("");
    onChangeCode("");
    onChangeNewPW("");
    onChangeConfirmPW("");
    setCurrScreen("reset");
    setEdited(false);
    setVisible(false);
  };

  init("bpUmfdhrALYzPBWpx"); //initializes emailJS userID (only 200 emails a month...)

  const resetEmailParams = () => {
    setCurrPin(Math.floor(100000 + Math.random() * 900000));
    return {
      from: "Sunday Friends",
      to: email,
      name: user.full_name,
      pin: currPin,
    };
  };

  const successEmailParams = {
    from: "Sunday Friends",
    to: "email",
    name: user.full_name,
  };

  const sendEmail = (type: string) => {
    switch (type) {
      case "reset":
        return emailjs.send(
          "service_4586ayw",
          "template_mz61cu7",
          resetEmailParams()
        );
      case "success":
        return emailjs.send(
          "service_4586ayw",
          "template_dessp0w",
          successEmailParams
        );
    }
  };

  const valid = () => {
    switch (currScreen) {
      case "reset":
        return emailRegex.test(email);
      case "verify":
        return code.length == 6 && parseInt(code) == currPin;
      case "setNew":
        return newPW == confirmPW && newPW.length >= 8 && newPW.length <= 20;
    }
  };

  const resetModal = () => {
    return (
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.topGreyLine} />
          <Pressable style={styles.exitPressable} onPress={() => reset()}>
            <Text style={(globalStyles.body1, styles.closeText)}>Close</Text>
          </Pressable>
          <Text style={[globalStyles.h2, styles.modalTitle]}>
            Reset Password
          </Text>
          <Text style={[globalStyles.h4, styles.subText1]}>
            Enter the email connected to your account to reset your password.
          </Text>
          <Text style={[globalStyles.body1, styles.subText2]}>
            A text containing a 6-digit code will be sent
          </Text>
          <TextInput
            style={
              edited && valid()
                ? [globalStyles.body1, styles.emailInputTyping]
                : [globalStyles.body1, styles.emailInput]
            }
            placeholder="email@gmail.com"
            placeholderTextColor={"#A9A9A9"}
            onChangeText={(e) => [onChangeEmail(e), setEdited(true), ,]}
            value={email}
            autoFocus={true}
          />
          <Pressable
            style={
              edited && valid()
                ? styles.resetContinuePressableAllowed
                : styles.resetContinuePressable
            }
            onPress={() => {
              edited && valid()
                ? [
                    setCurrScreen("verify"),
                    setEdited(false),
                    //setCurrPin(Math.floor(100000 + Math.random() * 900000)),
                    sendEmail("reset"),
                  ]
                : null;
            }}
          >
            <Text
              style={
                edited && valid()
                  ? [globalStyles.overline1, styles.greyText]
                  : [globalStyles.overline1, styles.greyText]
              }
            >
              CONTINUE
            </Text>
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
            <Text style={(globalStyles.body1, styles.closeText)}>Close</Text>
          </Pressable>
          <Text style={[globalStyles.h2, styles.modalTitle]}>Verify Email</Text>
          <Text style={[globalStyles.h4, styles.subText1]}>
            Enter the 6-digit code sent to {email}, typed: {code} generated:
            {currPin}
          </Text>
          <TextInput
            style={
              edited && code.length > 0
                ? [globalStyles.body1, styles.verifyInputTyping]
                : [globalStyles.body1, styles.verifyInput]
            }
            placeholder="6-digit code"
            placeholderTextColor={"#A9A9A9"}
            keyboardType="numeric"
            onChangeText={(e) => [onChangeCode(e), setEdited(true)]}
            value={code}
          />
          <Pressable
            style={styles.resendPressable}
            onPress={() => [
              setEdited(false),
              setCurrScreen("verify"),
              //setCurrPin(Math.floor(100000 + Math.random() * 900000)),
              sendEmail("reset"),
              onChangeCode(""),
            ]}
          >
            <Text style={globalStyles.overline1}>RESEND CODE</Text>
          </Pressable>
          <Pressable
            style={
              edited && valid()
                ? styles.verifyContinuePressableAllowed
                : styles.verifyContinuePressable
            }
            onPress={() => {
              edited && valid()
                ? [setCurrScreen("setNew"), setEdited(false)]
                : null;
            }}
          >
            <Text style={[globalStyles.overline1, styles.whiteText]}>
              CONTINUE
            </Text>
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
            <Text style={(globalStyles.body1, styles.closeText)}>Close</Text>
          </Pressable>
          <Text style={[globalStyles.h2, styles.modalTitle]}>
            Set New Password
          </Text>
          <Text style={[globalStyles.overline2, styles.labelPassword]}>
            PASSWORD
          </Text>
          <TextInput
            style={
              edited && valid()
                ? [globalStyles.body1, styles.setNewInputTyping]
                : [globalStyles.body1, styles.setNewInput]
            }
            placeholder="Enter password"
            placeholderTextColor="#A9A9A9"
            onChangeText={(e) => [onChangeNewPW(e), setEdited(true)]}
            value={newPW}
            autoFocus={true}
          />
          <Text style={[globalStyles.overline2, styles.labelConfirmPassword]}>
            CONFIRM PASSWORD
          </Text>
          <TextInput
            style={[globalStyles.body1, styles.confirmNewInput]}
            placeholder="Enter same password"
            placeholderTextColor="#A9A9A9"
            onChangeText={(e) => [onChangeConfirmPW(e), setEdited(true)]}
            value={confirmPW}
          />

          <View style={styles.characterCheckIcon}>
            {newPW.length >= 8 && newPW.length <= 20 ? (
              <SvgIcon type="greenCheck" />
            ) : (
              <SvgIcon type="redX" />
            )}
          </View>
          <View style={styles.characterCheckText}>
            <Text style={globalStyles.body2}>8-20 Characters</Text>
          </View>

          <View style={styles.numberCheckIcon}>
            {/\d/.test(newPW) ? (
              <SvgIcon type="greenCheck" />
            ) : (
              <SvgIcon type="redX" />
            )}
          </View>
          <View style={styles.numberCheckText}>
            <Text style={globalStyles.body2}>At least 1 number</Text>
          </View>

          <View style={styles.uppercaseCheckIcon}>
            {/[A-Z]/.test(newPW) ? (
              <SvgIcon type="greenCheck" />
            ) : (
              <SvgIcon type="redX" />
            )}
          </View>
          <View style={styles.uppercaseCheckText}>
            <Text style={globalStyles.body2}>At least 1 uppercase letter</Text>
          </View>

          <View style={styles.spacesCheckIcon}>
            {/^\S+$/.test(newPW) ? (
              <SvgIcon type="greenCheck" />
            ) : (
              <SvgIcon type="redX" />
            )}
          </View>
          <View style={styles.spacesCheckText}>
            <Text style={globalStyles.body2}>No spaces</Text>
          </View>

          <Pressable
            style={
              edited && valid()
                ? styles.resetContinuePressableAllowed
                : styles.resetContinuePressable
            }
          >
            <Text
              style={
                edited && valid()
                  ? [globalStyles.overline1, styles.greyText]
                  : [globalStyles.overline1, styles.greyText]
              }
              onPress={() =>
                valid()
                  ? [setCurrScreen("success"), sendEmail("success")]
                  : null
              }
            >
              {edited && valid() ? "CONTINUE" : "RESET PASSWORD"}
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
            <Text style={(globalStyles.body1, styles.closeText)}>Close</Text>
          </Pressable>
          <Text style={[globalStyles.h2, styles.successTitle]}>
            You're all set!
          </Text>
          <Text style={[globalStyles.h4, styles.successSubTitle]}>
            Your new password has been set. Check your inbox for comfirmation.
          </Text>
          <Pressable style={styles.closePressable} onPress={() => reset()}>
            <Text style={[globalStyles.overline1, styles.whiteText]}>
              CLOSE
            </Text>
          </Pressable>
        </View>
      </Modal>
    );
  };

  switch (currScreen) {
    case "reset":
      return resetModal();
    case "verify":
      return verifyModal();
    case "setNew":
      return setNewPassword();
    case "success":
      return success();
  }
  return null;
};
