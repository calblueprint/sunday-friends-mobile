/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/navigation';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {

            }
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
          Personal: {
            screens: {
              PersonalScreen: 'personal',
            },
          },
          Family: {
            screens: {
              FamilyScreen: 'family',
            },
          },
          Redeem: {
            screens: {
              RedeemScreen: 'redeem',
            },
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
