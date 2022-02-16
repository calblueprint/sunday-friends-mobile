import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FamilyScreen from "../screens/FamilyScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import InventoryScreen from "../screens/InventoryScreen";
import { RootTabParamList, RootTabScreenProps } from "../types/navigation";
import Icon from '../components/Icon';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
                }}
            />
            <Tab.Screen
                name="Family"
                component={FamilyScreen}
                options={{
                    title: 'Family',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
                }}
            />
            <Tab.Screen
                name="Inventory"
                component={InventoryScreen}
                options={{
                    title: 'Inventory',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="shopping-cart" color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;