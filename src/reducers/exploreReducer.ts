import actionTypes, { IAction } from '../actionTypes';
import { MediaCard } from './types';

export type ExploreState = {
  latest: MediaCard[],
  featured: MediaCard[],
  explore: MediaCard[],
  favorite: MediaCard[],
}

const defaultState: ExploreState = {
  latest: [],
  featured: [],
  explore: [],
  favorite: [],
};

const exploreReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case actionTypes.explore.requested:
    case actionTypes.explore.completed:
    case actionTypes.explore.failed:
    case actionTypes.favorite.changed:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default exploreReducer;
