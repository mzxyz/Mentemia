import {combineReducers} from 'redux';
import home from './homeReducer';
import explore from './exploreReducer';
import training from './trainingReducer';

export default combineReducers({
  home,
  explore,
  training,
});
