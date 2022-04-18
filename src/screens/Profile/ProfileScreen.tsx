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
import { getUser } from "../../firebase/firestore/user";
import { User } from "../../types/schema";
import { ProfileLogoutModal } from "../../components/ProfileLogoutModal/ProfileLogoutModal";
import { ProfileEditModal } from "../../components/ProfileEditModal/ProfileEditModal";
import { AuthenticatedUserContext } from '../../context/userContext';

const ProfileScreen = ({navigation}: any) => {
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
  const [profileSwitchModalVisible, setProfileSwitchModalVisible] =
    useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const { userUID, setUserUID } = useContext(AuthenticatedUserContext);
  const [user, setUser] = useState(defaultUser);
  console.log("userUID is ");
  console.log(userUID);
  const test = async () => {
    const u = await getUser(userUID);
    console.log(u)
  };
  test();
  


  useEffect(() => {
    getUser(userUID).then((currUser) => {
      setUser(currUser);
    });
  }, []);

  return (
    <ViewContainer>
      <View
        style={
          profileSwitchModalVisible || logoutModalVisible || editModalVisible
            ? styles.modalVisibleContainer
            : null
        }
      />

      <Pressable style={styles.backArrowPressable}
      onPress={() => navigation.goBack()}>
        <SvgIcon type="chevronLeft" />
      </Pressable>
      <Pressable
        style={styles.profileImagePressable}
        onPress={() => setProfileSwitchModalVisible(true)}
      >
        <ProfileSwitchModal
          visible={profileSwitchModalVisible}
          setVisible={setProfileSwitchModalVisible}
        />
        <SvgIcon type="profileHeadSmiley" />
        <View style={styles.downArrow}>
          <SvgIcon type="downArrow" />
        </View>
      </Pressable>

      <Title style={[styles.profileName, globalStyles.h3Bold]}>
        {user.full_name}
      </Title>

      <Pressable
        style={styles.editPressable}
        onPress={() => setEditModalVisible(true)}
      >
        <Text style={styles.overline2WHITE}>EDIT PROFILE</Text>
        <ProfileEditModal
          visible={editModalVisible}
          setVisible={setEditModalVisible}
          user={user}
        />
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
        onPress={() => setLogoutModalVisible(true)}
      >
        <Text style={styles.overline1WHITE}>LOGOUT</Text>
        <ProfileLogoutModal
          visible={logoutModalVisible}
          setVisible={setLogoutModalVisible}
        />
      </Pressable>
    </ViewContainer>
  );
};

export default ProfileScreen;
