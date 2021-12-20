import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FamilyScreen from "../screens/FamilyScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import InventoryScreen from "../screens/InventoryScreen";
import { RootTabParamList, RootTabScreenProps } from "../types/navigation";
import Icon from '../components/Icon';

export default function TabNavigator() {
    const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>();
    return (
        <Navigator
            initialRouteName="Home"
        >
            <Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
                }}
            />
            <Screen
                name="Family"
                component={FamilyScreen}
                options={{
                    title: 'Family',
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
                }}
            />
            <Screen
                name="Inventory"
                component={InventoryScreen}
                options={{
                    title: 'Inventory',
                    tabBarIcon: ({ color }) => <Icon name="shopping-cart" color={color} />,
                }}
            />
        </Navigator>
    );
}