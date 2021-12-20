import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import { Provider as PaperProvider } from 'react-native-paper';
import useTheme from './src/hooks/useTheme';
import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const theme = useTheme();

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
