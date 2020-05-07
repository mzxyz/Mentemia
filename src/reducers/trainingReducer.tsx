import actionTypes from '../actionTypes';

const defaultState = {
  projects: [],
};

const trainingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.training.requested:
    case actionTypes.training.completed:
    case actionTypes.training.failed:
      return { ...state, ...action.payload };
    default:
      return defaultState;
  }
};

export default trainingReducer;
