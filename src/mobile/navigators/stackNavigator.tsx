import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderLeft from '../components/heade-left';
import HomeContainer from '../screens/home';
import ExploreContainer from '../screens/explore';
import TrainingContainer from '../screens/training';
import ProfilePage from '../screens//profile';
import MediaDetailsContainer from '../screens/media';

// TODO: test
import { LatestContainer } from '../screens/explore/exploreContainers';

const Stack = createStackNavigator();

const customisedOptions = (title: string, iconName: string) => {
	return {
		title: '',
		headerStyle: { shadowColor: 'transparent' },
		headerLeft: () => <HeaderLeft title={title} iconName={iconName} />,
	};
};

export const HomeNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Home"
			component={LatestContainer}
			options={customisedOptions('Mentemia', 'stars')}
		/>
		<Stack.Screen
			name="MediaDetails"
			component={MediaDetailsContainer}
			options={{ header: () => null }}
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
			name="MediaDetails"
			component={MediaDetailsContainer}
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
