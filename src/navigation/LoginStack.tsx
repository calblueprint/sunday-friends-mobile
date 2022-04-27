import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import InviteScreen from '../screens/Invite/InviteScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import Signup1Screen from '../screens/Login/Signup1Screen';
import Signup2Screen from '../screens/Login/Signup2Screen';
import Signup3Screen from '../screens/Login/Signup3Screen';
import SigninScreen from '../screens/Login/SigninScreen';
import Error1Screen from '../screens/Login/Error1Screen';
import Error2Screen from '../screens/Login/Error2Screen';
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
      <Stack.Screen name="Signup1" component={Signup1Screen} options={{ headerShown: false, title: "Signup1" }} />
      <Stack.Screen name="Signup2" component={Signup2Screen} options={{ headerShown: false, title: "Signup2" }} />
      <Stack.Screen name="Signup3" component={Signup3Screen} options={{ headerShown: false, title: "Signup3" }} />
      <Stack.Screen name="Invite" component={InviteScreen} options={{ headerShown: false, title: "Invite" }} />
      <Stack.Screen name="Error1" component={Error1Screen} options={{ headerShown: false, title: "Error1" }} />
      <Stack.Screen name="Error2" component={Error2Screen} options={{ headerShown: false, title: "Error2" }} />
    </Stack.Navigator>
  );
}

export default LoginStack;
