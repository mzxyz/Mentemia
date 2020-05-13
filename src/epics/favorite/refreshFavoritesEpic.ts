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
      const isFavorite = get(action, 'payload.isFavorite');
      const item = get(action, 'payload.item');
      
      let favoriteList = state.explore.favoriteList;
      if (isFavorite) {
        favoriteList = [{ ...item, isFavorite: true }, ...favoriteList];
      } else {
        favoriteList = favoriteList.filter(({ id }) => item.id !== id);
      }

      return of({
        type: actionTypes.favorite.changed,
        payload: { favoriteList }
      })
    })
  );

  export default refreshFavoritesEpic;
