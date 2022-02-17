import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ViewContainer from '../components/ViewContainer';
import { Title } from 'react-native-paper';

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#eee',
  },
});

const ModalScreen = () => {
  return (
    <ViewContainer>
      <Title>Modal</Title>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ViewContainer>
  );
}

export default ModalScreen;