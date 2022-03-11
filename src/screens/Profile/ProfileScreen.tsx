import * as React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { Title } from "react-native-paper";
import EditScreenInfo from "../../components/EditScreenInfo";
import ViewContainer from "../../components/ViewContainer";
import styles from "./styles";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";

function Item({ name, role, status }) {
  if (status == 'Signed In') {
    return (
      <View style={styles.headFlatListItem}>
        <View style={styles.photoFiller} />
        <View style={styles.listInfo}>
          <Text style={globalStyles.body1Bold}>{name}</Text>
          <Text style={globalStyles.body2}>{role}</Text>
        </View>
        <Pressable style={styles.signedIn}>
          <Text style={globalStyles.body2}>{status}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.flatListItem}>
      <View style={styles.photoFiller} />
      <View style={styles.listInfo}>
        <Text style={globalStyles.body1Bold}>{name}</Text>
        <Text style={globalStyles.body2}>{role}</Text>
      </View>
      <Pressable style={styles.switch}>
        <Text style={globalStyles.body2}>{status}</Text>
      </Pressable>
    </View>
  );
}

function ProfileScreen() {
  const [profileSwitchModalVisible, setProfileSwitchModalVisible] =    useState(false);

  const DATA = [
    {
      id: "1",
      name: "Kelly Hu",
      role: "Dependent",
    },
    {
      id: "2",
      name: "Albert Liu",
      role: "Dependent",
    },
    {
      id: "3",
      name: "Sydney Bui",
      role: "Dependent",
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

  const renderItem = ({ item }) => (
    <Item name={item.name} role={item.role} status="Switch" />
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  const addMember = () => (
    <View style={styles.addMember}>
      <Pressable style={styles.addPressable}>
        <SvgIcon type="addPlus" />
      </Pressable>
      <Text style={[globalStyles.body1Bold, styles.listInfo]}>Add Member</Text>
    </View>
  );

  return (
    <View
      style={
        profileSwitchModalVisible
          ? styles.modalVisibleContainer
          : globalStyles.container
      }
    >

      <Modal visible={profileSwitchModalVisible} transparent>
        <View style={styles.switchProfileModalView}>
          <Pressable
            style={styles.switchModalX}
            onPress={() => setProfileSwitchModalVisible(false)}
          >
            <SvgIcon type="greyX" />
          </Pressable>
          <Item name="Jacob Kim" role="Head" status="Signed In" />
          <View style={styles.modalDivider} />
          <FlatList
            style={styles.flatList}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={itemSeparator}
            ListFooterComponent={addMember}
          />
        </View>
      </Modal>

      <Pressable
        style={styles.profileImagePressable}
        onPress={() => setProfileSwitchModalVisible(true)}
      >
        <Image
          style={styles.profileImage}
          source={require('../../../assets/images/CrownedSmiley.png')}
        />
        <View style={styles.downArrow}>
          <SvgIcon type="downArrow" />
        </View>
      </Pressable>

      <Title style={[styles.profileName, globalStyles.h3Bold]}>Jacob Kim</Title>
      <Pressable style={styles.editPressable}>
        <Text style={globalStyles.overline2}>EDIT PROFILE</Text>
      </Pressable>
      <Pressable style={styles.resetPressable}>
        <Text style={globalStyles.overline2}>RESET PASSWORD</Text>
      </Pressable>

      <View style={styles.profileFields}>
        <Text style={globalStyles.overline1}>NAME</Text>
        <Text style={globalStyles.overline1}>ROLE</Text>
        <Text style={globalStyles.overline1}>EMAIL</Text>
        <Text style={globalStyles.overline1}>PASSWORD</Text>
      </View>

      <View style={styles.profileValues}>
        <Text style={globalStyles.body1}>Jacob Kim</Text>
        <Text style={globalStyles.body1}>Dad</Text>
        <Text style={globalStyles.body1}>booblywobbly@gmail.com</Text>
        <Text style={globalStyles.body1}>********</Text>
      </View>
      
      <Pressable style={styles.logoutPressable}>
        <Text style={globalStyles.overline2}>LOGOUT</Text>
      </Pressable>
    </View>
  );
}

export default ProfileScreen;
