import React from 'react';
import { TabBarView } from '../../components';
import {
	LatestContainer,
	FeaturedContainer,
	ExploreContainer,
	FavoriteContainer,
} from './exploreContainers';

const Explore = () => {
	const routes = [
		{ title: 'Latest', component: LatestContainer },
		{ title: 'Featured', component: FeaturedContainer },
		{ title: 'Try This', component: ExploreContainer },
		{ title: 'My List', component: FavoriteContainer },
	];

	return <TabBarView routeCofnigs={routes} />;
};

export default Explore;
