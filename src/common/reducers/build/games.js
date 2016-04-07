import {
  GAMES_POST,
  GAMES_GET,
  GAMES_GET_ID,
  GAMES_PUT,
  GAMES_DELETE
} from '../../actions/build/games';

export default function games(state = {
    selected : '',
    games : []
}, action) {
    switch (action.type) {
        case GAMES_GET_ID:
        case GAMES_GET:
        case GAMES_POST:
        case GAMES_DELETE:
        case GAMES_PUT:
            return Object.assign({}, state, {
                games: action.value
            });
        default:
            return state;
    }
}