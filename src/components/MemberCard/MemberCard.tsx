import * as React from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { default as styles } from "./styles";
import SvgIcon from "../../../assets/SvgIcon";
import {
  deleteUserInvite,
  getUserInviteByFamily,
  getUserInvite,
  editUserInvite,
} from "../../firebase/firestore/userInvite";
import InviteRadioButton from "../InviteRadioButton/InviteRadioButton";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import FormInput from "../FormInput";
import RBSheet from "react-native-raw-bottom-sheet";
import globalStyles from "../../globalStyles";
import { useRef, useState } from "react";
import { RadioButton } from "react-native-paper/lib/typescript/components/RadioButton/RadioButton";
import { User_Invite } from "../../types/schema";

const MemberCard = ({
  name,
  email,
  status,
  editScreen,
  userInviteId,
  setUserInvites,
  familyID,
}: {
  name: string;
  email: string;
  status: string;
  editScreen: boolean;
  userInviteId: string;
  setUserInvites: any;
  familyID: number;
}) => {
  const refRBSheet = useRef();
  const { ...methods } = useForm();
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editStatus, setEditStatus] = useState(status);

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
          sortUserInvites(data);
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

  const modalOpen = () => {
    setEditName(name);
    setEditEmail(email);
    setEditStatus(status);

    if (status != "Head" && !editScreen) {
      refRBSheet.current.open();
    }
  };

  const radioButton = () => {
    if (status == "Parent") {
      return <InviteRadioButton setStatus={setEditStatus} status={0} />;
    }
    if (status == "Child") {
      return <InviteRadioButton setStatus={setEditStatus} status={1} />;
    }
  };

  const sortUserInvites = (data: User_Invite[]) => {
    const sorted: User_Invite[] = new Array(data.length);

    data.forEach((user) => {
      if (user.status == "Parent") {
        sorted.push(user);
      }
    });

    data.forEach((user) => {
      if (user.status == "Child") {
        sorted.push(user);
      }
    });

    setUserInvites(sorted);
  };

  const [isFocused, changeFocus] = React.useState(true);
  const handleFocus = () => changeFocus(false);
  const handleBlur = () => changeFocus(true);

  const handleEdit = () => {
    // methods.handleSubmit(onSubmit, onError);
    // set default user values to new name, new email, new status
    // add default user to firebase

    const newInvite = {
      name: editName,
      email: editEmail,
      status: editStatus,
      family_id: familyID,
    };

    editUserInvite(userInviteId, editName, editEmail, editStatus).then(() => {
      getUserInviteByFamily(familyID).then((data) => {
        setUserInvites(data);
        sortUserInvites(data);
      });
    });

    setEditName("");
    setEditEmail("");
    setEditStatus("");
    refRBSheet.current.close();
  };

  return (
    <View>
      <Pressable style={styles.container} onPress={() => modalOpen()}>
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={700}
        customStyles={{
          container: {
            alignItems: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Text style={styles.modalTitle}>Add your family member's details</Text>
        <View style={styles.innerContainer2}>
          <Text style={globalStyles.overline2}>family relationship</Text>
        </View>
        {radioButton()}
        <View style={styles.innerContainer2}>
          <Text style={globalStyles.overline2}>full name</Text>
          <TextInput
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[
              styles.input,
              {
                borderColor: isFocused ? "#A9A9A9" : "#526DC2",
                borderWidth: 1,
                backgroundColor: "#ffffff",
              },
            ]}
            value={editName}
            onChangeText={(newName) => setEditName(newName)}
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
                backgroundColor: "#ffffff",
              },
            ]}
            value={editEmail}
            keyboardType="email-address"
            onChangeText={(newEmail) => setEditEmail(newEmail)}
            placeholderTextColor="#A9A9A9"
          />
        </View>

        <View style={styles.separator3} />
        <Pressable
          onPress={() => handleEdit()}
          style={styles.rectangularButton}
        >
          <Text style={styles.rectangularButtonText}>edit member</Text>
        </Pressable>
      </RBSheet>
    </View>
  );
};

export default MemberCard;
