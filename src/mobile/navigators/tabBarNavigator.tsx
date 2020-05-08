
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

import { HomeNavigator , ExploreNavigator, TrainingNavigator, MeNavigator } from './stackNavigator';
import Icon from '../components/icon';

const Tab = createBottomTabNavigator();

const TabSources = [
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

const TabBarNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#547cfe',
        inactiveTintColor: '#dddfe1',
        labelStyle: { fontSize: 10, marginTop: -10 },
      }}
    >
      {
        TabSources.map(({ name, component, icon }) => (
          <Tab.Screen 
            key={name}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name={icon} color={color} size={size} />
              ),
          }}/>
        ))
      }
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabBarNavigator;
