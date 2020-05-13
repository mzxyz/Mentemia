import { combineEpics } from 'redux-observable';

import fetchHomeEpic from './fetchHomeEpic';
import fetchTrainingEpic from './fetchTrainingEpic';
import fetchExploreEpic from './fetchExploreEpic';
import fetchMediaDetailsEpic from './fetchMediaDetailsEpic';

const epics = [
  fetchHomeEpic,
  fetchTrainingEpic,
  fetchExploreEpic,
  fetchMediaDetailsEpic
];

export default combineEpics(...epics);
