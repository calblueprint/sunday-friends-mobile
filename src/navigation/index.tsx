/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
<<<<<<< HEAD
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import InviteScreen from '../screens/InviteScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types/navigation';
import LinkingConfiguration from './LinkingConfiguration';
import TabNavigator from './TabNavigator';
import LoginStack from './LoginStack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
=======
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import InviteScreen from "../screens/Invite/InviteScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types/navigation";
import LinkingConfiguration from "./LinkingConfiguration";
import TabNavigator from "./TabNavigator";
import LoginStack from "./LoginStack";
import ProfileScreen from "../screens/ProfileScreen";
>>>>>>> 8cab1852a1171bf79e322200319572003383b713

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="LoginStack"
        component={LoginStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
