export const GAMES_POST= 'GAME_POST';
export const GAMES_GET= 'GAMES_GET';
export const GAMES_GET_ID= 'GAME_GET_ID';
export const GAMES_PUT= 'GAME_PUT';
export const GAMES_DELETE= 'GAME_DELETE';

export function fetchGames(value) {
  return {
    type: GAMES_GET,
    store : 'games',
    value : value
  };
}

export function fetchGame(value) {
  return {
    type: GAMES_GET_ID,
    store : 'games',
    value : value
  };
}

export function addGame(value) {
  return {
    type: GAMES_POST,
    store : 'games',
    value : value
  };
}

export function updateGame(value) {
  return {
    type: GAMES_PUT,
    store : 'games',
    value : value
  };
}

export function deleteGame(value) {
  return {
    type: GAMES_DELETE,
    store : 'games',
    value : value
  };
}