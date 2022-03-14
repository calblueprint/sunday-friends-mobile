import * as React from "react";
import { useState } from "react";
import { Modal, View, Pressable, Text } from "react-native";
import globalStyles from "../../globalStyles";
import styles from "./styles";

export const ProfileLogoutModal = ({ visible, setVisible }: any) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.logoutModal}>
        <Pressable style={styles.logoutPressableModal}>
          <Text style={styles.overline1WHITE}>LOGOUT</Text>
        </Pressable>
        <Pressable
          style={styles.cancelLogoutPressable}
          onPress={() => setVisible(false)}
        >
          <Text style={globalStyles.overline1}>CANCEL</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
