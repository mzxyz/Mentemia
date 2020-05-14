import { connect, ConnectedProps } from 'react-redux';
import { navigate, navigation } from '../../../utils/rootNavigation';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { MediaCard } from '../../../reducers/types';
import { State } from '../../../reducers';
import MediaDetailsPage from './MediaDetailsPage';

const mapStateToProps = ({ media }: State) => ({
	...media,
	relatedTopics: media.related_topics,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onPageBack: () => navigation().goBack(),
	onNavigateToMediaPage: () => {
		navigation().goBack();
		navigate('MediaDetails')
	},
	onRequestData: () => dispatch({ type: actionTypes.media.requested }),
	onFavoriteChanged: (item: MediaCard, isFavorite: boolean) =>
		dispatch({
			type: actionTypes.changeFavorite.toggled,
			payload: { item, isFavorite },
		}),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;

export default connector(MediaDetailsPage);
