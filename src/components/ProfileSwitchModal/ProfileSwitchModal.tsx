import * as React from "react";
import { useState } from "react";
import { View, Text, Modal, Pressable, FlatList, Image } from "react-native";
import styles from "./styles";

import globalStyles from "../../globalStyles";
import SvgIcon from "../../../assets/SvgIcon";
import ProfileSwitchItem from "../ProfileSwitchItem/ProfileSwitchItem";
import { User } from "../../types/schema";

const DATA = [
  {
    id: "0",
    name: "Jacob Kim",
    role: "Head",
    signedIn: true,
  },
  {
    id: "1",
    name: "Kelly Hu",
    role: "Dependent",
    signedIn: false,
  },
  {
    id: "2",
    name: "Albert Liu",
    role: "Dependent",
    signedIn: false,
  },
  {
    id: "3",
    name: "Sydney Bui",
    role: "Dependent",
    signedIn: false,
  },
  // {
  //   id: '4',
  //   name: 'Gabe Espinosa',
  //   role: 'Head',
  // },
  // {
  //   id: '5',
  //   name: 'Danashi Messele',
  //   role: 'Dependent',
  // },
];

const renderItem = ({ item }: any) => (
  <ProfileSwitchItem name={item.name} signedIn={item.signedIn} />
);

const itemSeparator = () => <View style={styles.itemSeparator} />;

const addMember = () => (
  <View style={styles.addMember}>
    <View style={styles.lastItemSeparator} />
    <Pressable style={styles.flatListImagePressable}>
      <SvgIcon type="addPlus" />
    </Pressable>
    <Text style={[globalStyles.body1, styles.flatlistName]}>
      Add Family Member
    </Text>
  </View>
);

const ProfileSwitchModal = ({ visible, setVisible }: any) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.switchProfileModalView}>
        <Text style={[globalStyles.h4Bold, styles.switchTitle]}>
          Switch Accounts
        </Text>
        <Pressable
          style={styles.switchModalX}
          onPress={() => setVisible(false)}
        >
          <SvgIcon type="greyX" />
        </Pressable>
        <FlatList
          style={styles.flatList}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={itemSeparator}
          ListFooterComponent={addMember}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </Modal>
  );
};

export default ProfileSwitchModal;
