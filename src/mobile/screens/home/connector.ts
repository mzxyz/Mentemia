import { connect, ConnectedProps } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { State } from '../../../reducers';
import { navigate } from '../../../utils//rootNavigation';

const mapStateToProps = ({ home: { actions, medias } }: State) => ({
	actions,
	medias,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onRequestData: () => dispatch({ type: actionTypes.home.requested }),
	onNavigateToMediaPage: () => navigate('MediaDetails'),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;
