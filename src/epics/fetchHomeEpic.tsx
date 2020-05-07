import { ofType } from 'redux-observable';
import { switchMap }  from 'rxjs/operators';
import { of } from 'rxjs';

import actionTypes from '../actionTypes';
import dataSource from './mock/home';

const fetchHomeEpic = action$ =>
  action$.pipe(
    ofType(actionTypes.home.requested),
    switchMap(() => (
      of ({
        type: actionTypes.home.completed,
        payload: { ...dataSource }
      }))
  ));

export default fetchHomeEpic;
