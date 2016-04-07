export const GAME_POST= 'GAME_POST';
export const GAME_PUT= 'GAME_PUT';
export const GAME_DELETE= 'GAME_DELETE';


export function addGame(value) {
  return {
    type: GAME_POST,
    value : value
  };
}

export function updateGame(value) {
  return {
    type: GAME_PUT,
    value : value
  };
}

export function deleteGame(value) {
  return {
    type: GAME_DELETE,
    value : value
  };
}