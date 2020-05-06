/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, SafeAreaView } from 'react-native';

import ExplorePage from './mobile/screens/explore/explorePage';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ExplorePage />
    </SafeAreaView>
  );
};

export default App;
