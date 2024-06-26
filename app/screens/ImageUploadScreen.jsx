import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerMenu from '../components/DrawerMenu';
import BottomTabNavigator from '../_layout/BottomTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import ImageUploadScreen from '../screens/ImageUploadScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Bottom tab navigator for main screens
const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="ImageUpload" component={ImageUploadScreen} />
  </Tab.Navigator>
);

// Root navigator with drawer and bottom tabs
const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={DrawerMenu}>
      <Drawer.Screen name="Main" component={MainTabNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
