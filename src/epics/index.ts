import { combineEpics } from 'redux-observable';

import api from './api/';
import favoriteEpics from './favorite';

const epics = [...favoriteEpics, ...api];

export default combineEpics(...epics);
