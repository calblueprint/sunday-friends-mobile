import React, { useState, useContext, useEffect } from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import { User } from "../../types/schema";
import userContext from "../../context/userContext";
import { editUser, getUser } from "../../firebase/firestore/user";

type ProfileEditModalProps = {
  visible: boolean;
  setVisible: Function;
  user: User;
  setUser: any;
};

export const ProfileEditModal = ({
  visible,
  setVisible,
  user,
  setUser,
}: ProfileEditModalProps) => {
  const value = useContext(userContext);

  const [name, onChangeName] = useState(user.full_name);
  const [email, onChangeEmail] = useState(user.email);

  useEffect(() => {
    getUser(value).then((currUser) => {
      setUser(currUser);
      onChangeName(user.full_name);
      onChangeEmail(user.email);
    });
  }, [visible]);

  const handleSubmit = () => {
    editUser(user.user_id, {
      full_name: name,
    });
    setVisible(false);
  };

  const valid = () => {
    return name != user.full_name || email != user.email;
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalView}>
        <View style={styles.topGreyLine} />
        <Pressable
          style={styles.exitPressable}
          onPress={() => setVisible(false)}
        >
          <Text style={(globalStyles.body1, styles.closeText)}>Close</Text>
        </Pressable>
        <Text style={[globalStyles.h4Bold, styles.title]}>Edit Profile</Text>

        <Pressable style={styles.profileImagePressable}>
          <SvgIcon type="profileHeadSmiley" />
        </Pressable>

        <View style={styles.fields}>
          <Text style={globalStyles.overline1}>NAME</Text>
          <Text style={globalStyles.overline1}>EMAIL</Text>
        </View>
        <TextInput
          style={[globalStyles.body1, styles.nameTextInput]}
          onChangeText={onChangeName}
          value={name}
          autoFocus={true}
        />
        <TextInput
          style={[globalStyles.body1, styles.emailTextInput]}
          onChangeText={onChangeEmail}
          value={email}
        />
        <Pressable
          onPress={valid() ? handleSubmit : null}
          style={valid() ? styles.savePressableAllowed : styles.savePressable}
        >
          <Text style={[globalStyles.overline1, styles.whiteText]}>SAVE</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
