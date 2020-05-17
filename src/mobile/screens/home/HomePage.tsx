import React, { useEffect } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

import { RowItem, TabHeader, TextRowItem } from '../../components';
import { Label, Training } from '../../../reducers/types';
import { Props } from './index';
import theme from '../../../theme';

const HomePage: React.FC<Props> = ({ actions, medias, onRequestData, onNavigateToMediaPage }) => {
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
				iconColor={theme.color.blue}
				onPress={() => {}}
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
				onPress={onNavigateToMediaPage}
			/>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="dark-content" />
			<TabHeader title="Today" />
			<ScrollView
				style={{ flex: 1, backgroundColor: theme.color.gray }}
				showsVerticalScrollIndicator={false}>
				{actions.map(renderActions)}
				{medias.map(renderMedias)}
			</ScrollView>
		</View>
	);
};

export default HomePage;
