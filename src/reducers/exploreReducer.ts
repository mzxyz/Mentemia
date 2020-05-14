import actionTypes, { IAction } from '../actionTypes';
import { MediaCard } from './types';

export type ExploreState = {
	latestList: MediaCard[];
	featuredList: MediaCard[];
	exploreList: MediaCard[];
	favoriteList: MediaCard[];
};

const defaultState: ExploreState = {
	latestList: [],
	featuredList: [],
	exploreList: [],
	favoriteList: [],
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
