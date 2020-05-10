import actionTypes from '../actionTypes';

const defaultState = {
  favorite: false,
  content: '',
  image: 'https://placeholder.png',
  related_topics: [],
};

const contentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.content.requested:
    case actionTypes.content.completed:
    case actionTypes.content.failed:
      return { ...state, ...action.payload };
    default:
      return defaultState;
  }
};

export default contentReducer;
