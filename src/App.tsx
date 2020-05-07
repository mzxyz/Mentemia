import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import TabBarNavigator from './mobile/navigators/tabBarNavigator';
import store from './store.tsx';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <TabBarNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
