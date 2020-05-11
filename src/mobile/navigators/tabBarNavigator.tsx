
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

import { HomeNavigator , ExploreNavigator, TrainingNavigator, MeNavigator } from './stackNavigator';
import { BottomTabBar } from '../components/';

const Tab = createBottomTabNavigator();

const tabBarItem = (
  name: string, 
  component: React.component, 
  icon: string
) => ({
  name, component, icon
});

const tabBarSources = [
  tabBarItem('Home', HomeNavigator, 'home'),
  tabBarItem('Explore', ExploreNavigator, 'explore'),
  tabBarItem('Traning', TrainingNavigator, 'stars'),
  tabBarItem('Me', MeNavigator, 'perm-identity'),
  tabBarItem('Search', TrainingNavigator, 'search'),
];

const tabScreens = () => (
  tabBarSources.map(({ name, component, icon }) => (
    <Tab.Screen 
      key={name} 
      name={name} 
      component={component} 
      options={{ tabBarLabel: icon }} 
    />
  ))
);

const TabBarNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomTabBar {...props} />}
    >
    {tabScreens()}
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabBarNavigator;
