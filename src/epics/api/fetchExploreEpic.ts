import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ActionsObservable } from '../types';
import actionTypes from '../../actionTypes';
import dataSource from '../mock/explore';

const fetchExploreEpic = (action$: ActionsObservable) =>
	action$.pipe(
		ofType(actionTypes.explore.requested),
		switchMap(() =>
			of({
				type: actionTypes.explore.completed,
				payload: { ...dataSource },
			}),
		),
	);

export default fetchExploreEpic;
