import * as React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import { default as styles } from "./styles";
import MemberCard from "../../components/MemberCard/MemberCard";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import "firebase/firestore";
import firebaseApp from "../../firebase/firebaseApp";
import { User_Invite } from "../../types/schema";

import SvgIcon from "../../../assets/SvgIcon";
import {
  getUserInviteByFamily,
  addUserInvite,
} from "../../firebase/firestore/userInvite";
import userContext from "../../context/userContext";
import { getUser } from "../../firebase/firestore/user";
import { getFamily } from "../../firebase/firestore/family";

const EditInviteScreen = ({ navigation }: any) => {
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
  const [newInviteName, setInviteName] = useState("");
  const [newInviteEmail, setInviteEmail] = useState("");
  const [newInviteStatus, setNewInviteStatus] = useState("");
  const [familyID, setFamilyID] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [familyName, setFamilyName] = useState("");
  const refRBSheet = useRef();

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

  return (
    <View style={styles.container}>
      <View style={styles.separator2} />
      <Text style={styles.title1}>Review before sending invites...</Text>
      <Text style={styles.title2}>{familyName} Family</Text>
      <ScrollView style={styles.scrollContainer}>
        <MemberCard
          name={userName}
          email={userEmail}
          status="Head"
          editScreen={true}
          userInviteId={userID}
          setUserInvites={setUserInvites}
        />
        {userInvites.map((user) => (
          <MemberCard
            name={user.name}
            email={user.email}
            status={user.status}
            editScreen={true}
            userInviteId={user.user_invite_id}
            setUserInvites={setUserInvites}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.whiteHalfButton}
          onPress={() =>
            navigation.navigate("LoginStack", { screen: "Invite" })
          }
        >
          <Text style={styles.rectangularButtonText2}>edit</Text>
        </Pressable>
        <Pressable
          style={styles.blueHalfButton}
          onPress={() =>
            navigation.navigate("LoginStack", { screen: "AllSetInvite" })
          }
        >
          <Text style={styles.rectangularButtonText}>send invites</Text>
        </Pressable>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default EditInviteScreen;
