import { CommonActions, StackActions } from "@react-navigation/native";
import * as React from "react";
import { useState, useEffect } from "react";
import { Modal, View, Pressable, Text } from "react-native";
import { signOut } from "../../firebase/auth";
import firebaseApp from "../../firebase/firebaseApp";
import globalStyles from "../../globalStyles";
import styles from "./styles";

export const ProfileLogoutModal = ({
  visible,
  setVisible,
  logout,
  setLogout,
  navigation,
}: any) => {
  const handleLogout = () => {
    setVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginStack" }],
    });
  };
  // useEffect(() => {
  //   setVisible(false);
  //   handleLogout();
  // }, [isLogoutPressed]);

  return (
    <Modal visible={visible} transparent>
      <View style={styles.logoutModal}>
        <Pressable
          style={styles.logoutPressableModal}
          onPress={() => [
            navigation.reset({
              index: 0,
              routes: [{ name: "LoginStack" }],
            }),
            signOut(),
          ]}
        >
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
