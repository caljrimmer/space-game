import { addAsset, updateAsset, deleteAsset} from './build/assets';
import { fetchGames, fetchGame, addGames, updateGames, deleteGames} from './build/games';
import { addGame, updateGame, deleteGame} from './build/game';
import { addBackground, updateBackground, deleteBackground} from './build/backgrounds';
import { addSelected } from './build/selected';

export {
	addAsset as addAsset,
	updateAsset as updateAsset,
	deleteAsset as deleteAsset,
	addGame as addGame,
	updateGame as updateGame,
	deleteGame as deleteGame,
	addBackground as addBackground,
	updateBackground as updateBackground,
	deleteBackground as deleteBackground,
	addSelected as addSelected,
	/*
	* Persistance via LowDB
	*/
	fetchGames as fetchGames,
	fetchGame as fetchGame,
	addGames as addGames,
	updateGames as updateGames,
	deleteGames as deleteGames
};

