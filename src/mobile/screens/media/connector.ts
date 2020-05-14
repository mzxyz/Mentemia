import { connect } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { MediaCard } from '../../../reducers/types';
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
  onFavoriteChanged: (item: MediaCard, isFavorite: boolean) => 
    dispatch({
      type: actionTypes.changeFavorite.toggled,
      payload: { item, isFavorite }
    }),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
