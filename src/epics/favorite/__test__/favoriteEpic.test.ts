import { Subject } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';

import actionTypes from '../../../actionTypes';
import favoritesEpic from '../_favoriteEpic';
import refreshFavoritesEpic from '../refreshFavoritesEpic';
import explore from '../../mock/explore';

describe('Update favorite epics test', () => {
  it('should refresh favorite with valid payload', async done => {
    const item = { id: 1000 };
    const action: ActionsObservable<any> = ActionsObservable.of({
      type: actionTypes.changeFavorite.toggled,
      payload: { item, isFavorite: true },
    });

    const state: StateObservable<any> = new StateObservable(new Subject(), { explore });

    refreshFavoritesEpic(action, state).subscribe(res => {
      expect(res.type).toBe(actionTypes.favorite.changed);
      done();
    });
  })

  it('requesting update favorite with valid payload should completed ', async done => {
    const action: ActionsObservable<any> = ActionsObservable.of({
      type: actionTypes.updateFavorite.requested,
    });

    const state: StateObservable<any> = new StateObservable(new Subject(), { explore });

    favoritesEpic(action, state).subscribe(res => {
      expect(res.type).toBe(actionTypes.updateFavorite.completed);
      done();
    });
  })
})