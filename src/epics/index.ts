import { combineEpics } from 'redux-observable';

import fetchHomeEpic from './fetchHomeEpic';
import fetchTrainingEpic from './fetchTrainingEpic';
import fetchExploreEpic from './fetchExploreEpic';
import fetchContentDetailsEpic from './fetchContentDetailsEpic';

const epics = [
  fetchHomeEpic,
  fetchTrainingEpic,
  fetchExploreEpic,
  fetchContentDetailsEpic
];

export default combineEpics(...epics);
