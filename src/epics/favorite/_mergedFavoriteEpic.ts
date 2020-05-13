import { ofType } from 'redux-observable';
import { switchMap, withLatestFrom, mapTo, catchError } from 'rxjs/operators';
import { of, merge } from 'rxjs';
import { get } from 'lodash';

import actionTypes from '../../actionTypes';
import { chainEpicsWithAction } from '../chainEpic';
import { ActionsObservable, StateObservable } from '../types';

// this is a demo for merge all the epic related with favorite updates

const updateFavoriteEpics = (action$: ActionsObservable, state$: StateObservable) => 
  merge(
    // update favorite status and favorite list
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
    ),

    // trigger update favorite request
    action$.pipe(
      ofType(actionTypes.changeFavorite.toggled),
      mapTo({ type: actionTypes.updateFavorite.requested })
    ),

    // update favorite on server side
    action$.pipe(
      ofType(actionTypes.updateFavorite.requested),
      withLatestFrom(state$),
      switchMap(([action, state]) => {
        //! do the update request to server side
        return of({
          type: actionTypes.updateFavorite.completed
        });
      }),
      catchError(error =>
        of({
          type: actionTypes.updateFavorite.failed,
          payload: error
        }))
    )
  );

export default updateFavoriteEpics;
