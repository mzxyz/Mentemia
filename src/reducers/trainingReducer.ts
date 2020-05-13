import actionTypes, { IAction } from '../actionTypes';
import { Training } from './types';

export type TrainingState = {
  projects: Training[],
}

const defaultState = {
  projects: [],
};

const trainingReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case actionTypes.training.completed:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default trainingReducer;
