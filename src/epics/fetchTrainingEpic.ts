import { ofType } from 'redux-observable';
import { switchMap }  from 'rxjs/operators';
import { of } from 'rxjs';

import actionTypes from '../actionTypes';
import dataSource from './mock/training';

const fetchTrainingEpic = action$ =>
  action$.pipe(
    ofType(actionTypes.training.requested),
    switchMap(() => (
      of ({
        type: actionTypes.training.completed,
        payload: { ...dataSource }
      }))
  ));

export default fetchTrainingEpic;
