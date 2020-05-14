import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import actionTypes, { Dispatch } from '../../../actionTypes';
import { RowItem, TabHeader } from '../../components';
import { Training } from '../../../reducers/types';
import { State } from '../../../reducers';
import theme from '../../../theme';

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

// container
const mapStateToProps = ({ training: { projects } }: State) => ({
	projects,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
	onRequestData: () => dispatch({ type: actionTypes.training.requested }),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ConnectedProps<typeof connector>;
// Alternatively solution:
// export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


export default connector(TrainingPage);
