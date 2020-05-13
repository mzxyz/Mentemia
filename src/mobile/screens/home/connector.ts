import { connect, ConnectedProps } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { State } from '../../../reducers';

const mapStateToProps = ({ 
  home: { actions, medias }
}: State) => ({
  actions,
  medias
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRequestData: () =>
    dispatch({ type: actionTypes.home.requested }),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

// Alternatively solution: 
// export type Props = ConnectedProps<typeof connector>;
