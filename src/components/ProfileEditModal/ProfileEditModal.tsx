import React, { useState, useContext, useEffect } from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import { User } from "../../types/schema";
import userContext from "../../context/userContext";
import firebaseApp from "../../firebase/firebaseApp";
import { getUser } from "../../firebase/firestore/user";

export type UserUpdateData = {
  full_name?: string;
  role?: string;
};

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
  const db = firebaseApp.firestore().collection("users");
  const value = useContext(userContext);

  const [nameText, onChangeNameText] = useState(user.full_name);
  const [roleText, onChangeRoleText] = useState(user.role);

  const [newUserData, setNewUserData] = useState<UserUpdateData>({});
  const [wasEdited, setWasEdited] = useState(false);

  const refresh = () => {};

  useEffect(() => {
    getUser(value).then((currUser) => {
      setUser(currUser);
      onChangeNameText(user.full_name);
      onChangeRoleText(user.role);
    });
  }, [visible]);

  const handleSubmit = async (): Promise<void> => {
    try {
      db.doc(user.user_id).update({
        full_name: nameText,
        role: roleText,
      });
      setVisible(false);
      console.log("completed");
    } catch (err) {
      console.log(0);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalView}>
        <View style={styles.topGreyLine} />
        <Pressable
          style={styles.exitPressable}
          onPress={() => [setVisible(false)]}
        >
          <SvgIcon type="greyX" />
        </Pressable>
        <Text style={[globalStyles.h4Bold, styles.title]}>Edit Profile</Text>

        <Pressable style={styles.profileImagePressable}>
          <SvgIcon type="profileHeadSmiley" />
        </Pressable>

        <View style={styles.fields}>
          <Text style={globalStyles.overline1}>Name</Text>
          <Text style={globalStyles.overline1}>Role</Text>
        </View>
        <TextInput
          style={[globalStyles.body1, styles.textNameInput]}
          onChangeText={onChangeNameText}
          value={nameText}
        />
        <TextInput
          style={[globalStyles.body1, styles.textRoleInput]}
          onChangeText={onChangeRoleText}
          value={roleText}
        />
        <Pressable onPress={handleSubmit} style={styles.savePressable}>
          <Text>SAVE</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
