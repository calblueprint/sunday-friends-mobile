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
import ProfileSwitchModal from "../../components/ProfileSwitchModal/ProfileSwitchModal";

function ProfileScreen() {
  const [profileSwitchModalVisible, setProfileSwitchModalVisible] =    useState(false);

  return (
    <ViewContainer>
      <View
        style={profileSwitchModalVisible ? styles.modalVisibleContainer : null}
      />

      <ProfileSwitchModal
        visible={profileSwitchModalVisible}
        setVisible={setProfileSwitchModalVisible}
        userID="userIDfiller"
      />

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
    </ViewContainer>
  );
}

export default ProfileScreen;
