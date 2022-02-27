import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import InviteScreen from '../screens/InviteScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/Login/SignupScreen';
import InitialScreen from '../screens/Login/InitialScreen';
import { LoginStackParamList } from '../types/navigation';
import LinkingConfiguration from './LinkingConfiguration';
import TabNavigator from './TabNavigator';

const LoginStack = () => {
  const Stack = createNativeStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={InitialScreen} options={{ headerShown: false, title: "Initial" }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, title: "Login" }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false, title: "Signup" }} />
      <Stack.Screen name="Invite" component={InviteScreen} options={{ headerShown: false, title: "Invite" }} />
    </Stack.Navigator>
  );
}

export default LoginStack;