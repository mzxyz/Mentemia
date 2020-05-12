import { ofType } from 'redux-observable';
import { switchMap }  from 'rxjs/operators';
import { of } from 'rxjs';

import actionTypes from '../actionTypes';
import dataSource from './mock/contentDetails';

const fetchContentDetailsEpic = action$ =>
  action$.pipe(
    ofType(actionTypes.content.requested),
    switchMap(() => (
      of ({
        type: actionTypes.content.completed,
        payload: { ...dataSource }
      }))
  ));

export default fetchContentDetailsEpic;
