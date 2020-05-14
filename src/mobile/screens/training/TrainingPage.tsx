import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import { RowItem, TabHeader } from '../../components';
import { Training } from '../../../reducers/types';

import theme from '../../../theme';
import { Props } from './index';

// page
const TrainingPage: React.FC<Props> = ({ projects, onRequestData }) => {
	const { blue, gray } = theme.color;

	useEffect(() => {
		onRequestData();
	});

	const renderRowItem = (item: Training, index: number) => {
		const { title, subTitle, icon } = item;
		return (
			<RowItem
				key={`${title}${index}`}
				title={title}
				subTitle={subTitle}
				iconName={icon}
				iconColor={blue}
			/>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<TabHeader title="Tools" />
			<ScrollView 
				style={{ flex: 1, backgroundColor: gray }}
				showsVerticalScrollIndicator={false}
			>
				{!!projects && projects.map(renderRowItem)}
			</ScrollView>
		</View>
	);
};

export default TrainingPage;
