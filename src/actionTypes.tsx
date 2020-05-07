import {
  apiActionTypes,
  changedActionTypes,
  toggledActionTypes,
  navigateActionTypes
} from './config/typeConfig';

const actionTypes = {
  // request data
  home: apiActionTypes('home data'),
  explore: apiActionTypes('explore data'),
  training: apiActionTypes('training data'),
}

export default actionTypes;
