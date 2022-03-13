import * as React from "react";
import { useState, useContext, useEffect } from "react";
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
import userContext from "../../context/userContext";
import { getUser } from "../../firebase/firestore/user";
import { User } from "../../types/schema";


function ProfileScreen() {
  const defaultUser: User = {
    user_id: "",
    address: "",
    created_at: "",
    email: "",
    role: "",
    family_id: 0,
    full_name: "",
    last_active: new Date(),
    parent: false,
    points: 0,
    reward_eligible: false,
    suspended: false,
    phone_number: "",
    transactions: [],
  };
  const [profileSwitchModalVisible, setProfileSwitchModalVisible] = useState(false);
  const value = useContext(userContext)
  const [user, setUser] = useState(defaultUser)
  const [logoutModalVisible, setLogoutModalVisible] = useState(false)

  useEffect(() => {
    getUser(value).then((currUser) => {
      setUser(currUser);
    })
  },[])

  return (
    <ViewContainer>
      <View
        style={(profileSwitchModalVisible || logoutModalVisible) ? styles.modalVisibleContainer : null}
      />

      <ProfileSwitchModal
        visible={profileSwitchModalVisible}
        setVisible={setProfileSwitchModalVisible}
        userID="userIDfiller"
      />

      <Pressable
        style={styles.backArrowPressable}
      >
        <SvgIcon type="chevronLeft"/>
      </Pressable>
      <Pressable
        style={styles.profileImagePressable}
        onPress={() => setProfileSwitchModalVisible(true)}
      >
        <SvgIcon type='profileHeadSmiley'/>
        <View style={styles.downArrow}>
          <SvgIcon type="downArrow" />
        </View>
      </Pressable>

      <Title style={[styles.profileName, globalStyles.h3Bold]}>{user.full_name}</Title>
      <Pressable style={styles.editPressable}>
        <Text style={styles.overline2WHITE}>EDIT PROFILE</Text>
      </Pressable>
      <Pressable style={styles.resetPressable}>
        <Text style={globalStyles.overline2}>RESET PASSWORD</Text>
      </Pressable>

      <View style={styles.profileFields}>
        <Text style={globalStyles.overline1}>NAME</Text>
        <Text style={globalStyles.overline1}>ROLE</Text>
        <Text style={globalStyles.overline1}>EMAIL</Text>
      </View>

      <View style={styles.profileValues}>
        <Text style={globalStyles.body1}>{user.full_name}</Text>
        <Text style={globalStyles.body1}>{user.role}</Text>
        <Text style={globalStyles.body1}>{user.email}</Text>
      </View>

      <Pressable 
        style={styles.logoutPressable} 
        onPress={() => setLogoutModalVisible(true)}>
        <Text style={styles.overline1WHITE}>LOGOUT</Text>
      </Pressable>

      <Modal visible={logoutModalVisible} transparent>
        <View style={styles.logoutModal}>
          <Pressable
            style={styles.logoutPressableModal}
          >
            <Text style={styles.overline1WHITE}>LOGOUT</Text>
          </Pressable>
          <Pressable
            style={styles.cancelLogoutPressable}
            onPress={() => setLogoutModalVisible(false)}
          >
            <Text style={globalStyles.overline1}>CANCEL</Text>
          </Pressable>
        </View>
      </Modal>

    </ViewContainer>
  );
}

export default ProfileScreen;
