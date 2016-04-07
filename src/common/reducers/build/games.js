import {
  GAME_POST,
  GAME_GET,
  GAME_GET_ID,
  GAME_PUT,
  GAME_DELETE
} from '../../actions/build/games';

export default function games(state = {
    selected : '',
    games : []
}, action) {
    switch (action.type) {
        case GAME_GET_ID:
            return Object.assign({}, state, {
                selected: action.value
            }); 
        case GAME_GET:
        case GAME_POST:
        case GAME_DELETE:
        case GAME_PUT:
            return Object.assign({}, state, {
                games: action.value
            });
        default:
            return state;
    }
}