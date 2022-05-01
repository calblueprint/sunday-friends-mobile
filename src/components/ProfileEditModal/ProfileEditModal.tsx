import React, { useState, useContext, useEffect } from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import { User } from "../../types/schema";
import { editUser, getUser } from "../../firebase/firestore/user";
import { AuthenticatedUserContext } from "../../context/userContext";

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
  const { userUID, setUserUID } = useContext(AuthenticatedUserContext);

  const [name, onChangeName] = useState(user.full_name);
  const [email, onChangeEmail] = useState(user.email);

  useEffect(() => {
    getUser(userUID).then((currUser) => {
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
          <SvgIcon
            type={
              user.role == "Head"
                ? "profileHeadSmiley"
                : "profileDependentSmiley"
            }
          />
        </Pressable>

        <Text style={[globalStyles.overline1, styles.nameField]}>NAME</Text>
        <Text style={[globalStyles.overline1, styles.emailField]}>EMAIL</Text>

        <TextInput
          style={[globalStyles.body1, styles.nameTextInput]}
          onChangeText={onChangeName}
          value={name}
          autoFocus={true}
        />
        <TextInput
          style={[globalStyles.body1, styles.emailTextInput]}
          onChangeText={onChangeEmail}
          editable={false}
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
