import * as React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import FormInput from "../../components/FormInput";
import RectangularButton from "../../components/RectangularButton/RectangularButton";
import { default as styles } from "./styles";
import MemberCard from "../../components/MemberCard/MemberCard";
import InviteRadioButton from "../../components/InviteRadioButton/InviteRadioButton";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import "firebase/firestore";
import firebaseApp from "../../firebase/firebaseApp";
import { User_Invite } from "../../types/schema";

import RBSheet from "react-native-raw-bottom-sheet";
import SvgIcon from "../../../assets/SvgIcon";
import {
  getUserInviteByFamily,
  addUserInvite,
} from "../../firebase/firestore/userInvite";
import userContext from "../../context/userContext";
import { getUser } from "../../firebase/firestore/user";
import { Z_DEFAULT_STRATEGY } from "zlib";
import globalStyles from "../../globalStyles";
import { getFamily } from "../../firebase/firestore/family";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const InviteScreen = ({ navigation }: any) => {
  const defaultUserInvites: User_Invite[] = [
    {
      name: "",
      family_id: 0,
      email: "",
      status: "",
      user_invite_id: "",
    },
  ];

  const defaultInvite: User_Invite = {
    name: "",
    family_id: 0,
    email: "",
    status: "",
    user_invite_id: "",
  };

  const value = useContext(userContext);
  const [userInvites, setUserInvites] = useState(defaultUserInvites);
  const [newInviteName, onChangeName] = useState("");
  const [newInviteEmail, onChangeEmail] = useState("");
  const [newInviteStatus, setNewInviteStatus] = useState("");
  const [familyID, setFamilyID] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [familyName, setFamilyName] = useState("");
  const refRBSheet = useRef();

  const handleAdd = () => {
    // methods.handleSubmit(onSubmit, onError);
    // set default user values to new name, new email, new status
    // add default user to firebase
    const newInvite = {
      name: newInviteName,
      email: newInviteEmail,
      status: newInviteStatus,
      family_id: familyID,
    };

    addUserInvite(newInvite as User_Invite).then(() => {
      getUserInviteByFamily(familyID).then((data) => {
        setUserInvites(data);
      });
    });

    refRBSheet.current.close();
  };

  useEffect(() => {
    getUser(value).then((user) => {
      setFamilyID(user.family_id);
      setUserName(user.full_name);
      setUserEmail(user.email);
      setUserID(user.user_id);
      getUserInviteByFamily(user.family_id).then((data) => {
        setUserInvites(data);
      });
      getFamily(user.family_id.toString()).then((family) => {
        setFamilyName(family.family_name);
      });
    });
  }, []);

  const [isFocused, changeFocus] = React.useState(true);
  const handleFocus = () => changeFocus(false);
  const handleBlur = () => changeFocus(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>You're in charge!</Text>
      <Text style={styles.title2}>Invite members to {familyName} Family</Text>
      <ScrollView style={styles.scrollContainer}>
        <MemberCard
          name={userName}
          email={userEmail}
          status="Head"
          userInviteId={userID}
        />
        {userInvites.map((user) => (
          <MemberCard
            name={user.name}
            email={user.email}
            status={user.status}
            userInviteId={user.user_invite_id}
          />
        ))}
        <Pressable
          style={styles.backgroundContainer}
          onPress={() => refRBSheet.current.open()}
        >
          <View style={styles.addContainer}>
            <View style={styles.addCircle}>
              <SvgIcon type="invite_add" />
            </View>
            <View style={styles.addInnerContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.nameText}>Add a member</Text>
              </View>
              <Text>Invite a parent, child, or dependent</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
      <RectangularButton
        onPress={() => navigation.navigate("LoginStack", { screen: "Invite" })}
        text="done"
        buttonStyle={{ backgroundColor: "#253C85" }}
        textStyle={{ color: "#FFF" }}
      />
      <View style={styles.separator} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={600}
        customStyles={{
          container: {
            alignItems: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <Text style={styles.modalTitle}>Add your family member's details</Text>
        <View style={styles.innerContainer}>
          <Text style={globalStyles.overline2}>family relationship</Text>
        </View>
        <InviteRadioButton setStatus={setNewInviteStatus} />
        <View style={styles.innerContainer}>
          <Text style={globalStyles.overline2}>full name</Text>
          <TextInput
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[
              styles.input,
              {
                borderColor: isFocused ? "#A9A9A9" : "#526DC2",
                borderWidth: 1,
                backgroundColor: value ? "#ffffff" : "#f2f2f2",
              },
            ]}
            value={newInviteName}
            placeholder="Firstname Lastname"
            onChangeText={onChangeName}
            placeholderTextColor="#A9A9A9"
          />
          <Text style={globalStyles.overline2}>email address</Text>
          <TextInput
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[
              styles.input,
              {
                borderColor: isFocused ? "#A9A9A9" : "#526DC2",
                borderWidth: 1,
                backgroundColor: value ? "#ffffff" : "#f2f2f2",
              },
            ]}
            value={newInviteEmail}
            placeholder="email@gmail.com"
            keyboardType="email-address"
            onChangeText={onChangeEmail}
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <View style={styles.separator} />
        <Pressable onPress={() => handleAdd()} style={styles.rectangularButton}>
          <Text style={styles.rectangularButtonText}>add member</Text>
        </Pressable>
      </RBSheet>
    </View>
  );
};

export default InviteScreen;
