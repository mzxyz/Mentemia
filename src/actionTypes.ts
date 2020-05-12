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
  content: apiActionTypes('content details'),

  navigate: {
    contentDetails: navigateActionTypes('content details'),
  }
}

export default actionTypes;
