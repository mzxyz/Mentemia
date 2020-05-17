import { connect, ConnectedProps } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { State } from '../../../reducers';
import TrainingPage from './TrainingPage';

// container
const mapStateToProps = ({ training: { projects } }: State) => ({
	projects,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
	onRequestData: () => dispatch({ type: actionTypes.training.requested }),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;
// Alternatively solution:
// export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connector(TrainingPage);
