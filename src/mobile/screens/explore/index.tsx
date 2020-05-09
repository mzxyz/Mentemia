import React from 'react';
import ExploreContainer from './exploreContainer';
import { TabBarView } from '../../components';

const Explore = () => {

  const routes = [ 
      { title: 'Latest', component: ExploreContainer},
      { title: 'Featured', component: ExploreContainer },
      { title: 'Try This', component: ExploreContainer },
      { title: 'My List', component: ExploreContainer },
    ];

  return (
    <TabBarView routeCofnigs={routes} />
  );
}

export default Explore;