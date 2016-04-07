import { fetchAssets, addAsset, updateAsset, deleteAsset} from './build/assets';
import { fetchGames, fetchGame, addGame, updateGame, deleteGame} from './build/games'
import { fetchBackgrounds, addBackground, updateBackground, deleteBackground} from './build/backgrounds';
import { fetchSelected, addSelected, updateSelected, deleteSelected} from './build/selected';

export { 
	fetchAssets as fetchAssets,
	addAsset as addAsset,
	updateAsset as updateAsset,
	deleteAsset as deleteAsset,
	fetchGames as fetchGames,
	fetchGame as fetchGame,
	addGame as addGame,
	updateGame as updateGame,
	deleteGame as deleteGame,
	fetchBackgrounds as fetchBackgrounds,
	addBackground as addBackground,
	updateBackground as updateBackground,
	deleteBackground as deleteBackground,
	fetchSelected as fetchSelected,
	addSelected as addSelected,
	updateSelected as updateSelected,
	deleteSelected as deleteSelected
};

