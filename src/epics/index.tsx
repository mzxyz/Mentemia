import { combineEpics } from 'redux-observable';

import fetchHomeEpic from './fetchHomeEpic';
import fetchTrainingEpic from './fetchTrainingEpic';

const epics = [
  fetchHomeEpic,
  fetchTrainingEpic
];

export default combineEpics(...epics);
