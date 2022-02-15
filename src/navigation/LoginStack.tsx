 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import InviteScreen from '../screens/InviteScreen';
 import { LoginStackParamList } from '../types/navigation';
 import LinkingConfiguration from './LinkingConfiguration';
 import TabNavigator from './TabNavigator';
 
 const LoginStack = () => {
   const Stack = createNativeStackNavigator<LoginStackParamList>();
   return (
     <Stack.Navigator>
       <Stack.Screen name="Invite" component={InviteScreen} options={{ headerShown: false }} />
     </Stack.Navigator>
   );
 }
 
 export default LoginStack;