import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import { Provider as PaperProvider } from "react-native-paper";
import useTheme from "./src/hooks/useTheme";
import Navigation from "./src/navigation";
import { getUser } from "./src/firebase/firestore/user";
import { currUser } from "./src/firebase/auth";
import {
  AuthenticatedUserContext,
  AuthenticatedUserProvider,
} from "./src/context/userContext";
import { User } from "./src/types/schema";
import firebaseApp from "./src/firebase/firebaseApp";
import emailjs, { init } from "@emailjs/browser";
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID } from "@env";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";

export default function App() {
  const auth = firebaseApp.auth();

  init(EMAILJS_USER_ID); //initializes emailJS userID (only 200 emails a month...)

  const isLoadingComplete = useCachedResources();
  const theme = useTheme();
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

  const [userUID, setUserUID] = useState("");
  console.log("try this");
  const test = async () => {
    const u = await getUser(userUID);
    console.log("try this");
    console.log(u);
  };
  test();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
    DM_Mono: require("./assets/fonts/DMMono-Medium.ttf"),
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    // console.log(userid);
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <AuthenticatedUserContext.Provider value={{ userUID, setUserUID }}>
            <Navigation />
            <StatusBar />
          </AuthenticatedUserContext.Provider>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
