import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import InviteScreen from "../screens/Invite/InviteScreen";
import EditInviteScreen from "../screens/Invite/EditInviteScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import SignupScreen from "../screens/Login/SignupScreen";
import SigninScreen from "../screens/Login/SigninScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import { LoginStackParamList } from "../types/navigation";
import LinkingConfiguration from "./LinkingConfiguration";
import TabNavigator from "./TabNavigator";

const LoginStack = () => {
  const Stack = createNativeStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SigninScreen}
        options={{ headerShown: false, title: "Signin" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, title: "Login" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false, title: "Signup" }}
      />
      <Stack.Screen
        name="Invite"
        component={InviteScreen}
        options={{ headerShown: false, title: "Invite" }}
      />
      <Stack.Screen
        name="EditInvite"
        component={EditInviteScreen}
        options={{ headerShown: false, title: "EditInvite" }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
