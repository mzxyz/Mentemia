import { connect } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { State } from '../../../reducers';

const mapStateToProps = ({ 
  media
}: State) => ({
  ...media,
  relatedTopics: media.related_topics,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRequestData: () =>
    dispatch({ type: actionTypes.media.requested }),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
