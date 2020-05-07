import actionTypes from '../actionTypes';

const defaultState = {
  latest: [],
  featured: [],
};

const exploreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.explore.requested:
    case actionTypes.explore.completed:
    case actionTypes.explore.failed:
      return { ...state, ...action.payload };
    default:
      return defaultState;
  }
};

export default exploreReducer;
