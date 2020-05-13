import { connect } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { State } from '../../../reducers';

const mapStateToProps = ({ 
  training: { projects } 
}: State) => ({
  projects
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRequestData: () =>
    dispatch({ type: actionTypes.training.requested }),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;