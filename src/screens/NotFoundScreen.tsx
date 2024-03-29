import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../types/navigation';
import { Title, Text } from 'react-native-paper';
import ViewContainer from '../components/ViewContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});


const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFound'>) => {
  return (
    <ViewContainer>
      <Title>This screen doesn't exist.</Title>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}> Go to home screen!</Text>
      </TouchableOpacity>
    </ViewContainer>
  );
}

export default NotFoundScreen;