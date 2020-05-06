import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import ExploreListPage from './exploreListPage';

const initialLayout = { width: Dimensions.get('window').width };

function ExplorePage() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Latest'},
    {key: 'second', title: 'Featured'},
    {key: 'third', title: 'Try This'},
    {key: 'forth', title: 'My List'},
  ])

  const renderScene = SceneMap({
    first: ExploreListPage,
    second: ExploreListPage,
    third: ExploreListPage,
    forth: ExploreListPage,
  });

  const renderTabBar = (props) => {
    return (
      <TabBar 
        {...props}
        style={{ backgroundColor: '0xffff', bottomBorderWidth: 1 }}
        indicatorStyle={{ backgroundColor: '#0087fa' }}
        renderLabel={({ route, focused, color }) => (
          <Text style={{ 
            color: focused ? 'black' : 'lightgray', 
            fontSize: 15, 
            fontWeight: '600',
          }}>
            {route.title}
          </Text>
        )}
      />
    )
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

export default ExplorePage;
