import actionTypes, { IAction } from '../actionTypes';
import { Training, Label } from './types';

export type HomeState = {
  actions: Training[],
  medias: Label[],
}

const defaultState = {
  actions: [],
  medias: [],
};

const homeReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case actionTypes.home.requested:
    case actionTypes.home.completed:
    case actionTypes.home.failed:
      return { ...state, ...action.payload }
    default:
      return state;
  }
};

export default homeReducer;
