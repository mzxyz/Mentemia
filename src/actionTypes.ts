import { Action, Dispatch } from 'redux';

import {
  apiActionTypes,
  changedActionTypes,
  toggledActionTypes,
  navigateActionTypes
} from './config/typeConfig';

export interface IAction extends Action {
  type: string,
  payload ?: object
}

export type Dispatch = Dispatch<IAction>;

const actionTypes = {
  // request data
  home: apiActionTypes('home data'),
  explore: apiActionTypes('explore data'),
  training: apiActionTypes('training data'),
  media: apiActionTypes('media details'),

  // favorite
  changeFavorite: toggledActionTypes('change favorite'),
  updateFavorite: apiActionTypes('update favorite'),
  favorite: changedActionTypes('favorite'),


  navigate: {
    mediaDetails: navigateActionTypes('media details'),
  }
}

export default actionTypes;