import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../screens/home/homePage';
import ExplorePage from '../screens/explore/explorePage';
import TrainingPage from '../screens/training/trainingPage';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Mentemia" component={HomePage} />
  </Stack.Navigator>
);

export const ExploreNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Explore" component={ExplorePage} />
  </Stack.Navigator>
);

export const TrainingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Training" component={TrainingPage} />
  </Stack.Navigator>
);
