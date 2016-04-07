export const BACKGROUND_POST= 'BACKGROUND_POST';
export const BACKGROUND_PUT= 'BACKGROUND_PUT';
export const BACKGROUND_DELETE= 'BACKGROUND_DELETE';

export function addBackground(value) {
  return {
    type: BACKGROUND_POST,
    value : value
  };
}

export function updateBackground(value) {
  return {
    type: BACKGROUND_PUT,
    value : value
  };
}

export function deleteBackground(value) {
  return {
    type: BACKGROUND_DELETE,
    value : value
  };
}