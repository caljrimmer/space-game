export const BACKGROUND_POST= 'BACKGROUND_POST';
export const BACKGROUND_GET= 'BACKGROUND_GET';
export const BACKGROUND_PUT= 'BACKGROUND_PUT';
export const BACKGROUND_DELETE= 'BACKGROUND_DELETE';

export function fetchBackgrounds(value) {
  return {
    type: BACKGROUND_GET,
    value : value
  };
}

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