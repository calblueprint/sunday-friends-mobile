import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { default as styles } from "./styles";
import SvgIcon from "../../../assets/SvgIcon";
import {
  deleteUserInvite,
  getUserInviteByFamily,
  getUserInvite,
} from "../../firebase/firestore/userInvite";

const MemberCard = ({
  name,
  email,
  status,
  editScreen,
  userInviteId,
  setUserInvites,
}: {
  name: string;
  email: string;
  status: string;
  editScreen: boolean;
  userInviteId: string;
  setUserInvites: any;
}) => {
  const icon = () => {
    if (status == "Head") {
      return (
        <Image
          style={styles.head}
          source={require("../../../assets/images/headSmiley.png")}
        />
      );
    }
    if (status == "Parent") {
      return (
        <Image
          style={styles.parent}
          source={require("../../../assets/images/parentSmiley.png")}
        />
      );
    }
    if (status == "Child") {
      return (
        <View style={styles.imageContainer}>
          <Image
            style={styles.child}
            source={require("../../../assets/images/childSmiley.png")}
          />
        </View>
      );
    }
    if (status == "Dependent") {
      return (
        <View style={styles.imageContainer}>
          <Image
            style={styles.dependent}
            source={require("../../../assets/images/childSmiley.png")}
          />
        </View>
      );
    }
  };

  const head = () => {
    if (status == "Head") {
      return <Text style={styles.nameText}> (You)</Text>;
    }
  };

  const handleDelete = (id: string) => {
    getUserInvite(id).then((user) => {
      deleteUserInvite(id).then(() => {
        getUserInviteByFamily(user.family_id).then((data) => {
          setUserInvites(data);
        });
      });
    });
  };

  const deleteButton = () => {
    if (status != "Head" && !editScreen) {
      return (
        <Pressable
          onPress={() => {
            handleDelete(userInviteId);
          }}
          style={styles.deleteContainer}
        >
          <SvgIcon type="invite_delete" />
        </Pressable>
      );
    }
    if (status == "Head" || editScreen) {
      return (
        <View style={styles.deleteContainer}>
          <View style={styles.deleteSeparator} />
        </View>
      );
    }
  };

  return (
    <Pressable style={styles.container}>
      {icon()}
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.nameText}>{name}</Text>
          {head()}
        </View>
        <Text>{email}</Text>
      </View>
      {deleteButton()}
    </Pressable>
  );
};

export default MemberCard;
