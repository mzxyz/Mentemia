import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeContainer from '../screens/home';
import ExplorePage from '../screens/explore/explorePage';
import TrainingContainer from '../screens/training';
import HeaderLeft from '../components/heade-left';

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
      component={ExplorePage}
      options={customisedOptions('Explore', 'stars')}
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
