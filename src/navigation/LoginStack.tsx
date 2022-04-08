import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import InviteScreen from '../screens/Invite/InviteScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen1 from '../screens/Login/SignupScreen1';
import SignupScreen2 from '../screens/Login/SignupScreen2';
import SignupScreen3 from '../screens/Login/SignupScreen3';
import SigninScreen from '../screens/Login/SigninScreen';
import ErrorScreen from '../screens/Login/ErrorScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import { LoginStackParamList } from '../types/navigation';
import LinkingConfiguration from './LinkingConfiguration';
import TabNavigator from './TabNavigator';

const LoginStack = () => {
  const Stack = createNativeStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false, title: "Signin" }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, title: "Login" }} />
      <Stack.Screen name="Signup1" component={SignupScreen1} options={{ headerShown: false, title: "Signup1" }} />
      <Stack.Screen name="Signup2" component={SignupScreen2} options={{ headerShown: false, title: "Signup2" }} />
      <Stack.Screen name="Signup3" component={SignupScreen3} options={{ headerShown: false, title: "Signup3" }} />
      <Stack.Screen name="Invite" component={InviteScreen} options={{ headerShown: false, title: "Invite" }} />
      <Stack.Screen name="Error" component={ErrorScreen} options={{ headerShown: false, title: "Error" }} />
    </Stack.Navigator>
  );
}

export default LoginStack;
