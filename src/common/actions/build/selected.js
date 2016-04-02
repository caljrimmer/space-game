export const SELECTED_POST= 'SELECTED_POST';

export function addSelected(value) {
  return {
    type: SELECTED_POST,
    value : value
  };
}