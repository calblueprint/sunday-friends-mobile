import * as React from "react";
import { useState, useRef } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
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
import RBSheet from "react-native-raw-bottom-sheet";
import SvgIcon from "../../../assets/SvgIcon";

const InviteScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("");
  const [userInvites, setUserInvites] = useState();
  const refRBSheet = useRef();

  type FormValues = {
    name: string;
    email: string;
  };

  const { ...methods } = useForm();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log({ data });

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log(errors);
  };

  const handleAdd = () => {
    //todo connect to backend
    //methods.handleSubmit(onSubmit, onError);
    refRBSheet.current.close();
  };

  const DATA: {
    id: string;
    name: string;
    head: boolean;
    email: string;
    status: string;
  }[] = [
    {
      id: "1",
      name: "Yakob Kim",
      head: true,
      email: "yakobkim@gmail.com",
      status: "head",
    },
    {
      id: "2",
      name: "Danashi",
      head: false,
      email: "danasheesh@gmail.com",
      status: "parent",
    },
    {
      id: "4",
      name: "Kelly",
      head: false,
      email: "kelly@berkeley.edu",
      status: "child",
    },
    {
      id: "5",
      name: "Yulin",
      head: false,
      email: "yuliniscool@yahoo.com",
      status: "child",
    },
    {
      id: "6",
      name: "Albert",
      head: false,
      email: "albie@gmail.edu",
      status: "dependent",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>You're in charge!</Text>
      <Text style={styles.title2}>Invite members to Kim Family</Text>
      <ScrollView style={styles.scrollContainer}>
        {DATA.map((member) => (
          <MemberCard
            name={member.name}
            head={member.head}
            email={member.email}
            status={member.status}
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
        <FormProvider {...methods}>
          <FormInput
            name="name"
            rules={{ required: "Field required" }}
            label="full name"
            placeholder="Firstname Lastname"
          />
          <FormInput
            name="email"
            rules={{ required: "Field required" }}
            label="email address"
            placeholder="email@gmail.com"
            keyboardType="email-address"
          />
        </FormProvider>
        <Text style={styles.modalText}>family relationship</Text>
        <InviteRadioButton />
        <Pressable onPress={() => handleAdd()} style={styles.rectangularButton}>
          <Text style={styles.rectangularButtonText}>add member</Text>
        </Pressable>
      </RBSheet>
    </View>
  );
};

export default InviteScreen;
