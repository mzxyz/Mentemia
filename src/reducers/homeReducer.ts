
import actionTypes from '../actionTypes';
import dataSource from '../epics/mock/home.json';

const defaultState = {
  actions: [],
  contents: [],
};

const homeReducer = (state = defaultState, action: any) => {
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
