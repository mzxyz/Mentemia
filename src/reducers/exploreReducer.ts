import actionTypes, { IAction } from '../actionTypes';
import { Card } from './types';

export type ExploreState = {
  latest: Card[],
  featured: Card[],
  favorite: Card[],
}

const defaultState: ExploreState = {
  latest: [],
  featured: [],
  favorite: [],
};

const exploreReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case actionTypes.explore.requested:
    case actionTypes.explore.completed:
    case actionTypes.explore.failed:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default exploreReducer;
