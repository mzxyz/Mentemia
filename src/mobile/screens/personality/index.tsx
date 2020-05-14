import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { ExpandRowItem } from '../../components';
import theme from '../../../theme';

const PersonalityPage: React.FC<{}> = () => {
	const items = [1, 2, 3, 4, 5];
	return (
		<ScrollView>
			{items.map((value: number) => (
				<ExpandRowItem
					key={`key ${value}`}
					title={`Part ${value}`}
					subTitles={['View report', 'Hide report']}
					subTitleColor={theme.color.blue}
					iconName={'subject'}
					iconColor={theme.color.green}
				/>
			))}
		</ScrollView>
	);
};

export default PersonalityPage;
