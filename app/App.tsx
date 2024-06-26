import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabLayout from './TabLayout';
import IndexScreen from './(tabs)/IndexScreen';
import ExploreScreen from './(tabs)/explore';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false, // Adjust options as needed
          style: {
            backgroundColor: 'white', // Example of setting background color
          },
        }}
        tabBar={(props) => <TabLayout {...props} />}
      >
        <Tab.Screen name="index" component={IndexScreen} />
        <Tab.Screen name="explore" component={ExploreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
