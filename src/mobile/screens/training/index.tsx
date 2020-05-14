import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import { RowItem, TabHeader } from '../../components';
import { Props, connector } from './connector';
import { Training } from '../../../reducers/types';

const TrainingPage: React.FC<Props> = ({ projects, onRequestData }) => {
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
				iconColor={'#547cfe'}
			/>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<TabHeader title="Tools" />
			<ScrollView style={{ flex: 1, backgroundColor: '#fbfbfd' }}>
				{!!projects && projects.map(renderRowItem)}
			</ScrollView>
		</View>
	);
};

export default connector(TrainingPage);
