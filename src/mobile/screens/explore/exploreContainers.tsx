import { connect } from 'react-redux';
import actionTypes, { Dispatch } from '../../../actionTypes';
import { MediaCard } from '../../../reducers/types';
import { State } from '../../../reducers/';
import ExplorePage from './explorePage';

// TODO: need refactor
const mapStateToLatestProps = ({ 
  explore: { latestList }
}: State) => ({
  type: 'latest',
  dataList: latestList,
});

const mapStateToFeaturedProps = ({ 
  explore: { featuredList }
}: State) => ({
  type: 'featured',
  dataList: featuredList,
});

const mapStateToExploreProps = ({ 
  explore: { exploreList }
}: State) => ({
  type: 'explore',
  dataList: exploreList,
});

const mapStateToFavoriteProps = ({ 
  explore: { favoriteList }
}: State) => ({
  type: 'favorite',
  dataList: favoriteList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRefreshData: (type: string) => 
    dispatch({ 
      type: actionTypes.explore.requested,
      payload: { type }
    }),
  onFavoriteChanged: (item: MediaCard, isFavorite: boolean) => 
    dispatch({
      type: actionTypes.changeFavorite.toggled,
      payload: { item, isFavorite }
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

