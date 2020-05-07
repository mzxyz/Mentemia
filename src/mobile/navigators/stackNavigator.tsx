import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeContainer from '../screens/home';
import ExplorePage from '../screens/explore/explorePage';
import TrainingContainer from '../screens/training';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Mentemia" component={HomeContainer} />
  </Stack.Navigator>
);

export const ExploreNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Explore" component={ExplorePage} />
  </Stack.Navigator>
);

export const TrainingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Training" component={TrainingContainer} />
  </Stack.Navigator>
);
