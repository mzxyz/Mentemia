import favoriteChainEpic from './favoriteChainEpic';
import refreshFavoritesEpic from './refreshFavoritesEpic';

const favoriteEpic = [refreshFavoritesEpic, ...favoriteChainEpic];

export default favoriteEpic;
