import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import TabBarNavigator from './mobile/navigators/tabBarNavigator';
import { setDefaultFontFamily } from './theme';
import store from './store';

const App = () => {
	useEffect(() => {
		setDefaultFontFamily();
	});

	return (
		<Provider store={store}>
			<TabBarNavigator />
		</Provider>
	);
};

export default App;
