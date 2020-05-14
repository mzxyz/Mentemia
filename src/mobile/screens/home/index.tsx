import { connect, ConnectedProps } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { navigate } from '../../../utils//rootNavigation';
import { State } from '../../../reducers';
import HomePage from './HomePage';

const mapStateToProps = ({ home: { actions, medias } }: State) => ({
	actions,
	medias,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onRequestData: () => dispatch({ type: actionTypes.home.requested }),
	onNavigateToMediaPage: () => navigate('MediaDetails'),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;

export default connector(HomePage);
