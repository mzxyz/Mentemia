import actionTypes, { IAction } from '../actionTypes';
import { Card, MediaFeature } from './types';

export type MediaState = MediaFeature & {
  content: string,
  relatedTopics: Card[],
}

const defaultState = {
  favorite: false,
  content: '',
  tag: '',
  image: 'https://placeholder.png',
  related_topics: [],
};

const MediaReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case actionTypes.media.requested:
    case actionTypes.media.completed:
    case actionTypes.media.failed:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default MediaReducer;
