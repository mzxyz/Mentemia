import { ofType } from 'redux-observable';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { get } from 'lodash';

import { ActionsObservable, StateObservable } from '../types';
import actionTypes from '../../actionTypes';

const refreshFavoritesEpic = (action$: ActionsObservable, state$: StateObservable) => 
  action$.pipe(
    ofType(actionTypes.changeFavorite.toggled),
    withLatestFrom(state$),
    switchMap(([action, state]) => {
      const item = get(action, 'payload.item');
      const selected = get(action, 'payload.selected');
      
      let favorite = state.explore.favorite;
      if (selected) {
        favorite = [{ ...item, isFavorite: true }, ...favorite];
      } else {
        favorite = favorite.filter(({ id }) => item.id !== id);
      }

      return of({
        type: actionTypes.favorite.changed,
        payload: { favorite }
      })
    })
  );

  export default refreshFavoritesEpic;
