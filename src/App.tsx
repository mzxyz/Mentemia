/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, SafeAreaView } from 'react-native';
import TabBarNavigator from './mobile/navigators/tabBarNavigator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabBarNavigator />
    </SafeAreaView>
  );
};

export default App;
