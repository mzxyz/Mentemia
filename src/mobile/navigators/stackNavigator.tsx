import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeContainer from '../screens/home';
import ExploreContainer from '../screens/explore';
import TrainingContainer from '../screens/training';
import ProfilePage from '../screens//profile';
import HeaderLeft from '../components/heade-left';

import ContentDetailsPage from '../screens/content';

const Stack = createStackNavigator();

const customisedOptions = (title: string, iconName: string) => {
  return {
    title: '',
    headerStyle: { shadowColor: 'transparent' },
    headerLeft: () => (
      <HeaderLeft 
        title={title} 
        iconName={iconName} 
      />
    )
  }
}

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={HomeContainer} 
      options={customisedOptions('Mentemia', 'stars')}
    />
  </Stack.Navigator>
);

export const ExploreNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Explore" 
      component={ExploreContainer}
      options={customisedOptions('Explore', 'stars')}
    />
    <Stack.Screen 
      name="ContentDetails" 
      component={ContentDetailsPage}
      options={{ header: () => null }}
    />
  </Stack.Navigator>
);

export const TrainingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Training" 
      component={TrainingContainer}
      options={customisedOptions('Training', 'stars')}
    />
  </Stack.Navigator>
);

export const MeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Training" 
      component={ProfilePage}
      options={customisedOptions('Me', 'stars')}
    />
  </Stack.Navigator>
);
