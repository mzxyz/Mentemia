import { combineEpics } from 'redux-observable';

import fetchHomeEpic from './fetchHomeEpic';
import fetchTrainingEpic from './fetchTrainingEpic';
import fetchExploreEpic from './fetchExploreEpic';
import fetchMediaDetailsEpic from './fetchMediaDetailsEpic';
import favoriteEpics from './favorite';

const epics = [
  fetchHomeEpic,
  fetchTrainingEpic,
  fetchExploreEpic,
  fetchMediaDetailsEpic,
  ...favoriteEpics,
];

export default combineEpics(...epics);
