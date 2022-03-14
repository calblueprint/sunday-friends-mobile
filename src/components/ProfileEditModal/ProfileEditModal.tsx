import React, { useState } from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";

export const ProfileEditModal = ({ visible, setVisible, user }: any) => {
  const [nameText, onChangeNameText] = useState(user.full_name);
  const [roleText, onChangeRoleText] = useState(user.role);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalView}>
        <View style={styles.topGreyLine} />
        <Pressable
          style={styles.exitPressable}
          onPress={() => [
            setVisible(false),
            onChangeNameText(user.full_name),
            onChangeRoleText(user.role),
          ]}
        >
          <SvgIcon type="greyX" />
        </Pressable>
        <Text style={[globalStyles.h4Bold, styles.title]}>Edit Profile</Text>
        <View style={styles.profileImage}>
          <Pressable style={styles.profileImagePressable}>
            <SvgIcon type="profileHeadSmiley" />
          </Pressable>
        </View>
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
      </View>
    </Modal>
  );
};
