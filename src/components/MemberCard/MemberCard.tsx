import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { default as styles } from "./styles";
import SvgIcon from "../../../assets/SvgIcon";
import { deleteUserInvite } from "../../firebase/firestore/userInvite";

const MemberCard = ({
  name,
  email,
  status,
  userInviteId,
}: {
  name: string;
  email: string;
  status: string;
  userInviteId: string;
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
    deleteUserInvite(id);
  };

  const deleteButton = () => {
    if (status != "Head") {
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
    if (status == "Head") {
      return <View style={styles.deleteContainer} />;
    }
  };

  return (
    <View style={styles.container}>
      {icon()}
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.nameText}>{name}</Text>
          {head()}
        </View>
        <Text>{email}</Text>
      </View>
      {deleteButton()}
    </View>
  );
};

export default MemberCard;
