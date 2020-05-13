import { connect } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { MediaCard } from '../../../reducers/types';
import { State } from '../../../reducers/';
import ExplorePage from './explorePage';

// TODO: need refactor
const mapStateToLatestProps = ({ 
  explore: { latest }
}: State) => ({
  type: 'latest',
  dataList: latest,
});

const mapStateToFeaturedProps = ({ 
  explore: { featured }
}: State) => ({
  type: 'featured',
  dataList: featured,
});

const mapStateToExploreProps = ({ 
  explore: { explore }
}: State) => ({
  type: 'explore',
  dataList: explore,
});

const mapStateToFavoriteProps = ({ 
  explore: { favorite }
}: State) => ({
  type: 'favorite',
  dataList: favorite,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRefreshData: (type: string) => 
    dispatch({ 
      type: actionTypes.explore.requested,
      payload: { type }
    }),
  onFavoriteChanged: (item: MediaCard, selected: boolean) => 
    dispatch({
      type: actionTypes.changeFavorite.toggled,
      payload: { item, selected }
    }),
  onMediaDetails: () => 
    dispatch({ type: actionTypes.navigate.mediaDetails })
});

export const LatestContainer = connect(
  mapStateToLatestProps, 
  mapDispatchToProps
)(ExplorePage);

export const FeaturedContainer = connect(
  mapStateToFeaturedProps, 
  mapDispatchToProps
)(ExplorePage);

export const ExploreContainer = connect(
  mapStateToExploreProps, 
  mapDispatchToProps
)(ExplorePage);

export const FavoriteContainer = connect(
  mapStateToFavoriteProps, 
  mapDispatchToProps
)(ExplorePage);

