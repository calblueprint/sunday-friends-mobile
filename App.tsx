import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import { Provider as PaperProvider } from 'react-native-paper';
import useTheme from './src/hooks/useTheme';
import Navigation from './src/navigation';
import { getUser } from './src/firebase/firestore/user';
import userContext from './src/context/userContext';
import { User } from './src/types/schema';

import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';

// export const UserContext = React.createContext(null);

export default function App() {
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
  const [user, setUser] = useState(defaultUser);
  const [userid, setUserId] = useState("X89EpL9f0nNE49PvXp0ERhkO30U2");

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  useEffect(() => {
    getUser("X89EpL9f0nNE49PvXp0ERhkO30U2").then((user) => {
      setUser(user);
    })
  },[])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <userContext.Provider value={userid}>
            <Navigation />
            <StatusBar />
          </userContext.Provider>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
