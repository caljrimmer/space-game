import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

//Build reducer
import game from './build/game';
import games from './build/games';
import selected from './build/selected';

const rootReducer = combineReducers({
    router: routerStateReducer,
    games: games,
    game: game,
    selected: selected
});

export default rootReducer;