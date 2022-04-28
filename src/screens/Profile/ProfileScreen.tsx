import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import styles from "./styles";
import SvgIcon from "../../../assets/SvgIcon";
import globalStyles from "../../globalStyles";
import { getUser } from "../../firebase/firestore/user";
import { User } from "../../types/schema";
import { ProfileLogoutModal } from "../../components/ProfileLogoutModal/ProfileLogoutModal";
import { ProfileEditModal } from "../../components/ProfileEditModal/ProfileEditModal";
import { ProfileResetPassword } from "../../components/ProfileResetPassword/ProfileResetPassword";
import { AuthenticatedUserContext } from "../../context/userContext";

const ProfileScreen = ({ navigation }: any) => {
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
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const { userUID, setUserUID } = useContext(AuthenticatedUserContext);
  const [user, setUser] = useState(defaultUser);
  const [isLogoutPressed, setIsLogoutPressed] = useState(false);

  useEffect(() => {
    getUser(userUID).then((currUser) => {
      setUser(currUser);
    });
  }, [editModalVisible]);

  return (
    <ViewContainer>
      <View
        style={
          editModalVisible || logoutModalVisible || resetModalVisible
            ? styles.modalVisibleContainer
            : null
        }
      />

      <Pressable
        style={styles.backArrowPressable}
        onPress={() => navigation.goBack()}
      >
        <SvgIcon type="chevronLeft" />
      </Pressable>

      <Pressable style={styles.profileImagePressable}>
        <SvgIcon type="profileHeadSmiley" />
      </Pressable>
      <Text style={[styles.profileName, globalStyles.h3Bold]}>
        {user.full_name}
      </Text>

      <Pressable
        style={styles.editPressable}
        onPress={() => setEditModalVisible(true)}
      >
        <Text style={styles.overline2WHITE}>EDIT PROFILE</Text>
        <ProfileEditModal
          visible={editModalVisible}
          setVisible={setEditModalVisible}
          user={user}
          setUser={setUser}
        />
      </Pressable>

      <Pressable
        style={styles.resetPressable}
        onPress={() => setResetModalVisible(true)}
      >
        <Text style={globalStyles.overline2}>RESET PASSWORD</Text>
        <ProfileResetPassword
          visible={resetModalVisible}
          setVisible={setResetModalVisible}
          user={user}
        />
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
          logout={isLogoutPressed}
          setLogout={setIsLogoutPressed}
          navigation={navigation}
        />
      </Pressable>
    </ViewContainer>
  );
};

export default ProfileScreen;
