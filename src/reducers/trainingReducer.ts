import actionTypes from '../actionTypes';

const defaultState = {
  projects: [],
};

const trainingReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.training.completed:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default trainingReducer;
