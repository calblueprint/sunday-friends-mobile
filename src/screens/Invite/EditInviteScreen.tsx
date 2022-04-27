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
import { AuthenticatedUserContext } from "../../context/userContext";
import { getUser } from "../../firebase/firestore/user";
import { getFamily } from "../../firebase/firestore/family";
import emailjs, { init } from "@emailjs/browser";
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID } from "@env";
import TabNavigator from "../../navigation/TabNavigator";

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

  const { userUID, setUserUID } = useContext(AuthenticatedUserContext);
  const [userInvites, setUserInvites] = useState(defaultUserInvites);

  const [familyID, setFamilyID] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [familyName, setFamilyName] = useState("");
  const refRBSheet = useRef();

  useEffect(() => {
    getUser(userUID).then((user) => {
      setFamilyID(user.family_id);
      setUserName(user.full_name);
      setUserEmail(user.email);
      setUserID(user.user_id);
      getUserInviteByFamily(user.family_id).then((data) => {
        setUserInvites(data);
        sortUserInvites(data);
      });
      getFamily(user.family_id.toString()).then((family) => {
        setFamilyName(family.family_name);
      });
    });
  }, []);

  const sortUserInvites = (data: User_Invite[]) => {
    const sorted: User_Invite[] = new Array(data.length);
    let index = 0;
    let inviteIndex = 0;

    data.forEach((user) => {
      if (user.status == "Parent") {
        sorted[index] = user;
        index++;
        data.splice(inviteIndex, 1);
      }
      inviteIndex++;
    });

    inviteIndex = 0;

    data.forEach((user) => {
      sorted[index] = user;
      index++;
      data.splice(inviteIndex, 1);
      inviteIndex++;
    });

    setUserInvites(sorted);
  };

  init(EMAILJS_USER_ID); //initializes emailJS userID (only 200 emails a month...)

  const handleSend = () => {
    {
      userInvites.forEach((user) =>
        emailjs.send(EMAILJS_SERVICE_ID, "template_j78fcdn", {
          to: user.email,
          name: user.name,
          family: familyName,
        })
      );
    }
    navigation.navigate("LoginStack", { screen: "AllSetInvite" });
  };

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
          onPress={() => navigation.navigate("Root", { screen: "Home" })}
        >
          <Text style={styles.rectangularButtonText2}>edit</Text>
        </Pressable>
        <Pressable style={styles.blueHalfButton} onPress={() => handleSend()}>
          <Text style={styles.rectangularButtonText}>send invites</Text>
        </Pressable>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default EditInviteScreen;
