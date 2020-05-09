import actionTypes from '../actionTypes';

const defaultState = {
  projects: [],
};

const trainingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.training.completed:
      return { ...state, ...action.payload };
    default:
      return defaultState;
  }
};

export default trainingReducer;
