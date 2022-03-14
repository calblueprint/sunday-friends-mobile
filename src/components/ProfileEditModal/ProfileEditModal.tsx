import React from "react";
import styles from "./styles";
import { Modal, View, Pressable, TextInput, Text } from "react-native";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import { set } from "react-hook-form";

export const ProfileEditModal = ({ visible, setVisible }: any) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalView}>
        <View style={styles.topGreyLine} />
        <Pressable
          style={styles.exitPressable}
          onPress={() => setVisible(false)}
        >
          <SvgIcon type="greyX" />
        </Pressable>
        <Text style={[globalStyles.h4Bold, styles.title]}>Edit Profile</Text>
        <View style={styles.profileImage}>
          <Pressable style={styles.profileImagePressable}>
            <SvgIcon type="profileDependentSmiley" />
          </Pressable>
        </View>
        <View style={styles.fields}>
          <Text style={globalStyles.overline1}>Name</Text>
          <Text style={globalStyles.overline1}>Role</Text>
        </View>
        <TextInput></TextInput>
      </View>
    </Modal>
  );
};
