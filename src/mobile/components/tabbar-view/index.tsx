import React, { useState, Component, ReactElement } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import theme from '../../../theme';

const initialLayout = { width: Dimensions.get('window').width };
const { white, blue, gray } = theme.color;

type Route = {
	title: string;
	component: ReactElement | Component;
};

type Props = {
	routeCofnigs: [Route];
};

const TabBarView = ({ routeCofnigs }: Props) => {
	const [index, setIndex] = useState(0);

	const [routes] = useState(
		routeCofnigs.map(({ title }) => ({
			key: title,
			title,
		})),
	);

	const renderScene = SceneMap(
		routeCofnigs.reduce((obj, route: Route) => {
			const { title, component } = route;
			obj = { ...obj, [title]: component };
			return obj;
		}, {}),
	);

	const renderTabBar = (props) => {
		return (
			<TabBar
				{...props}
				style={{ backgroundColor: white }}
				indicatorStyle={{ backgroundColor: blue }}
				renderLabel={({ route, focused, color }) => (
					<Text
						style={{
							color: focused ? 'black' : 'lightgray',
							fontSize: 15,
							fontWeight: '600',
						}}>
						{route.title}
					</Text>
				)}
			/>
		);
	};

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			renderTabBar={renderTabBar}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			sceneContainerStyle={{ backgroundColor: gray }}
		/>
	);
};

export default TabBarView;
