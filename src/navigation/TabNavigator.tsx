import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonalScreen from "../screens/Personal/PersonalScreen";
import FamilyScreen from "../screens/Family/FamilyScreen";

// import PersonalScreen from "../screens/Personal/PersonalScreen";
import LoginScreen from "../screens/Login/LoginScreen";
// import PersonalScreen from "../screens/Home/HomeScreen";
import InventoryScreen from "../screens/InventoryScreen";
import { RootTabParamList, RootTabScreenProps } from "../types/navigation";
import Icon from '../components/Icon';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="F"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#253C85',
                    height: 85,
                    paddingTop: 10,
                },
                tabBarActiveTintColor: "#FFFFFF",
                tabBarInactiveTintColor: "#7F93D1",
            }}
        >
            <Tab.Screen
                name="Family"
                component={FamilyScreen}
                options={{
                    title: 'Family',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
                }}
            />
            <Tab.Screen
                name="Personal"
                component={PersonalScreen}
                options={{
                    title: 'Personal',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
                }}
            />
            {/* <Tab.Screen
                name="Inventory"
                component={InventoryScreen}
                options={{
                    title: 'Inventory',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="shopping-cart" color={color} />,
                }}
            /> */}
            {/* <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
                }}
            /> */}
        </Tab.Navigator>
    );
}

export default TabNavigator;