export const GAMES_POST= 'GAMES_POST';
export const GAMES_GET= 'GAMES_GET';
export const GAMES_GET_ID= 'GAMES_GET_ID';
export const GAMES_PUT= 'GAMES_PUT';
export const GAMES_DELETE= 'GAMES_DELETE';

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

export function addGames(value) {
  return {
    type: GAMES_POST,
    store : 'games',
    value : value
  };
}

export function updateGames(value) {
  return {
    type: GAMES_PUT,
    store : 'games',
    value : value
  };
}

export function deleteGames(value) {
  return {
    type: GAMES_DELETE,
    store : 'games',
    value : value
  };
}