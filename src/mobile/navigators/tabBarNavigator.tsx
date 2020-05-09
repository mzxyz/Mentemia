
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

import { HomeNavigator , ExploreNavigator, TrainingNavigator, MeNavigator } from './stackNavigator';
import { BottomTabBar } from '../components/';

const Tab = createBottomTabNavigator();

const TabBarSources = [
  {
    name: 'Home',
    component: HomeNavigator,
    icon: 'home',
  },
  {
    name: 'Explore',
    component: ExploreNavigator,
    icon: 'explore',
  },
  {
    name: 'Traning',
    component: TrainingNavigator,
    icon: 'stars',
  },
  {
    name: 'Me',
    component: MeNavigator,
    icon: 'person',
  },
  {
    name: 'Search',
    component: TrainingNavigator,
    icon: 'search',
  }
];

const tabBarItems = () => (
  TabBarSources.map(({ name, component, icon }) => (
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
    {tabBarItems()}
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabBarNavigator;
