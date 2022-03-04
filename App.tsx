import { StatusBar } from 'expo-status-bar';
import React, {createContext} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import { Provider as PaperProvider } from 'react-native-paper';
import useTheme from './src/hooks/useTheme';
import Navigation from './src/navigation';
import { useFonts } from 'expo-font'

export const UserContext = React.createContext(null);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const theme = useTheme();

  const [loaded] = useFonts({
    DM_Mono: require('./assets/fonts/DMMono-Medium.ttf'),
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigation />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
