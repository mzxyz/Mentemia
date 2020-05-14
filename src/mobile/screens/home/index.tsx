import React, { useEffect } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

import { RowItem, TabHeader, TextRowItem } from '../../components';
import { Label, Training } from '../../../reducers/types';
import { Props, connector } from './connector';

const HomePage: React.FC<Props> = ({ actions, medias, onRequestData, navigation }) => {
	useEffect(() => {
		onRequestData();
	}, []);

	const renderActions = (item: Training, index: number) => {
		const { title, subTitle, icon } = item;
		return (
			<RowItem
				key={`${title}${index}`}
				title={title}
				subTitle={subTitle}
				iconName={icon}
				iconColor={'#547cfe'}
			/>
		);
	};

	const renderMedias = (item: Label, index: number) => {
		const { title, subTitle } = item;
		return (
			<TextRowItem
				key={`${title}${index}`}
				title={title}
				content={subTitle}
				onPress={() => navigation.navigate('ContentDetails')}
			/>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="dark-content" />
			<TabHeader title="Today" />
			<ScrollView style={{ flex: 1, backgroundColor: '#fbfbfd' }}>
				{actions.map(renderActions)}
				{medias.map(renderMedias)}
			</ScrollView>
		</View>
	);
};

export default connector(HomePage);
