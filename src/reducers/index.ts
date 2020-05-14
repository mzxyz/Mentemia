import { combineReducers } from 'redux';
import home from './homeReducer';
import explore from './exploreReducer';
import training from './trainingReducer';
import media from './mediaReducer';

const rootReducer = combineReducers({
	home,
	explore,
	training,
	media,
});

export type State = ReturnType<typeof rootReducer>;
// Alternatively, explicit for all state types
// export type State = HomeState & ExploreState & TrainingState & MediaState

export default rootReducer;
