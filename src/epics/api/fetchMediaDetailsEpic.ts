import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ActionsObservable } from '../types';
import actionTypes from '../../actionTypes';
import dataSource from '../mock/mediaDetails';

// using delay for simulate request
const fetchMediaDetailsEpic = (action$: ActionsObservable) =>
	action$.pipe(
		ofType(actionTypes.media.requested),
		switchMap(() =>
			of({
				type: actionTypes.media.completed,
				payload: { ...dataSource },
			}),
		),
	);

export default fetchMediaDetailsEpic;
