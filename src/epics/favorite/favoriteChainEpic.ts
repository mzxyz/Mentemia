import { chainEpicsWithAction } from '../chainEpic';
import actionTypes from '../../actionTypes';

const favoriteChainEpics = [
  chainEpicsWithAction(
    actionTypes.changeFavorite.toggled,
    actionTypes.updateFavorite.requested
  ),
];

export default favoriteChainEpics;
