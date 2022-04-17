import React, { useState } from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text, Linking } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import emailjs, { init } from "@emailjs/browser";
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID } from "@env";

export const ProfileResetPassword = ({ visible, setVisible, user }: any) => {
  const [email, onChangeEmail] = useState("");
  const [code, onChangeCode] = useState("");
  const [newPW, onChangeNewPW] = useState("");
  const [confirmPW, onChangeConfirmPW] = useState("");
  const [edited, setEdited] = useState(false);
  const [screen, setScreen] = useState("reset");
  const [pin, setPin] = useState(0);
  const [pwError, setPwError] = useState(false);

  const reset = () => {
    onChangeEmail("");
    onChangeCode("");
    onChangeNewPW("");
    onChangeConfirmPW("");
    setEdited(false);
    setScreen("reset");
    setVisible(false);
    setPwError(false);
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  init(EMAILJS_USER_ID); //initializes emailJS userID (only 200 emails a month...)

  const resetEmailParams = {
    from: "Sunday Friends",
    to: email,
    name: user.full_name,
    pin: pin,
  };

  const successEmailParams = {
    from: "Sunday Friends",
    to: email,
    name: user.full_name,
  };

  const sendEmail = (type: string) => {
    var generated = Math.floor(100000 + Math.random() * 900000);
    setPin(generated);
    resetEmailParams.pin = generated;
    switch (type) {
      case "reset":
        return emailjs.send(
          EMAILJS_SERVICE_ID,
          "template_mz61cu7",
          resetEmailParams
        );
      case "success":
        return emailjs.send(
          EMAILJS_SERVICE_ID,
          "template_dessp0w",
          successEmailParams
        );
    }
  };

  const valid = () => {
    switch (screen) {
      case "reset":
        return emailRegex.test(email);
      case "verify":
        return parseInt(code) == pin;
      case "setNew":
        return (
          newPW == confirmPW &&
          newPW.length >= 8 &&
          newPW.length <= 20 &&
          /\d/.test(newPW) &&
          /[A-Z]/.test(newPW) &&
          /^\S+$/.test(newPW)
        );
    }
  };

  const resetModal = () => {
    return (
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.topGreyLine} />
          <Pressable style={styles.exitPressable} onPress={() => reset()}>
            <Text style={[globalStyles.body1, styles.closeText]}>Close</Text>
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
              edited && email.length > 0
                ? [globalStyles.body1, styles.emailInputTyping]
                : [globalStyles.body1, styles.emailInput]
            }
            placeholder="email@gmail.com"
            placeholderTextColor={"#A9A9A9"}
            onChangeText={(e) => [onChangeEmail(e), setEdited(true)]}
            value={email}
            autoFocus={true}
          />
          <Pressable
            style={
              valid()
                ? styles.resetContinuePressableAllowed
                : styles.resetContinuePressable
            }
            onPress={() => {
              valid()
                ? [setScreen("verify"), setEdited(false), sendEmail("reset")]
                : null;
            }}
          >
            <Text
              style={
                valid()
                  ? [globalStyles.overline1, styles.greyText]
                  : [globalStyles.overline1, styles.sapphireText]
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
            Enter the 6-digit code sent to {email} {pin}
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
              setScreen("verify"),
              sendEmail("reset"),
              onChangeCode(""),
            ]}
          >
            <Text style={globalStyles.overline1}>RESEND CODE</Text>
          </Pressable>
          <Pressable
            style={
              valid()
                ? styles.verifyContinuePressableAllowed
                : styles.verifyContinuePressable
            }
            onPress={() => {
              valid() ? [setScreen("setNew"), setEdited(false)] : null;
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

  const setNewModal = () => {
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
              pwError
                ? [
                    globalStyles.body1,
                    styles.setNewInputTyping,
                    styles.errorBackground,
                  ]
                : edited && newPW.length > 0
                ? [globalStyles.body1, styles.setNewInputTyping]
                : [globalStyles.body1, styles.setNewInput]
            }
            placeholder={pwError ? "Error Empty" : "Enter password"}
            placeholderTextColor="#A9A9A9"
            onChangeText={(e) => [onChangeNewPW(e), setEdited(true)]}
            value={newPW}
            autoFocus={true}
          />
          {pwError && newPW.length == 0 ? (
            <Text style={[globalStyles.body2, styles.fieldReqSetPW]}>
              Field Required
            </Text>
          ) : null}
          <Text style={[globalStyles.overline2, styles.labelConfirmPassword]}>
            CONFIRM PASSWORD
          </Text>
          <TextInput
            style={
              pwError
                ? [
                    globalStyles.body1,
                    styles.confirmNewInputTyping,
                    styles.errorBackground,
                  ]
                : edited && confirmPW.length > 0
                ? [globalStyles.body1, styles.confirmNewInputTyping]
                : [globalStyles.body1, styles.confirmNewInput]
            }
            placeholder={pwError ? "Error Empty" : "Enter same password"}
            placeholderTextColor="#A9A9A9"
            onChangeText={(e) => [onChangeConfirmPW(e), setEdited(true)]}
            value={confirmPW}
          />

          {pwError ? (
            newPW != confirmPW ? (
              <Text style={[globalStyles.body2, styles.pwMustMatchError]}>
                Passwords must match
              </Text>
            ) : confirmPW.length == 0 ? (
              <Text style={[globalStyles.body2, styles.fieldReqConfirmPW]}>
                Field Required
              </Text>
            ) : null
          ) : null}

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
              valid()
                ? styles.resetContinuePressableAllowed
                : styles.resetContinuePressable
            }
          >
            <Text
              style={
                valid()
                  ? [globalStyles.overline1, styles.sapphireText]
                  : [globalStyles.overline1, styles.greyText]
              }
              onPress={() =>
                valid()
                  ? [setScreen("success"), sendEmail("success")]
                  : setPwError(true)
              }
            >
              {valid() ? "CONTINUE" : "RESET PASSWORD"}
            </Text>
          </Pressable>
        </View>
      </Modal>
    );
  };

  const successModal = () => {
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
            Your new password has been set. Check your inbox for confirmation.
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

  switch (screen) {
    case "reset":
      return resetModal();
    case "verify":
      return verifyModal();
    case "setNew":
      return setNewModal();
    case "success":
      return successModal();
    default:
      return null;
  }
};
