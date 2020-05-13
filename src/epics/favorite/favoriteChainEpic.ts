import { chainEpicsWithAction } from '../chainEpic';
import actonTypes from '../../actionTypes';

const favoriteChainEpics = [
  chainEpicsWithAction(
    actonTypes.changeFavorite.toggled,
    actonTypes.updateFavorite.requested
  ),
];

export default favoriteChainEpics;
