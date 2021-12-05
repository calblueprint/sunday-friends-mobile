import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FamilyScreen from "../screens/FamilyScreen";
import LoginScreen from "../screens/LoginScreen";
import PersonalScreen from "../screens/PersonalScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RedeemScreen from "../screens/RedeemScreen";
import { RootTabParamList, RootTabScreenProps } from "../types/navigation";
import Icon from '../components/Icon';

export default function TabNavigator() {
    const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>();
    return (
        <Navigator
            initialRouteName="Profile"
        >
            <Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Family',
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
                }}
            />
            <Screen
                name="Family"
                component={FamilyScreen}
                options={{
                    title: 'Family',
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
                }}
            />
            <Screen
                name="Personal"
                component={PersonalScreen}
                options={{
                    title: 'Personal',
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
                }}
            />
            <Screen
                name="Redeem"
                component={RedeemScreen}
                options={{
                    title: 'Redeem',
                    tabBarIcon: ({ color }) => <Icon name="dollar" color={color} />,
                }}
            />
        </Navigator>
    );
}