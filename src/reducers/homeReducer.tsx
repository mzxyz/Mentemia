import actionTypes from '../actionTypes';

const defaultState = {
  actions: [],
  contents: []
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.home.requested:
    case actionTypes.home.completed:
    case actionTypes.home.failed:
      return { ...state, ...action.payload }
    default:
      return defaultState;
  }
};

export default homeReducer;
