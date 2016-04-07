export const SELECTED= 'SELECTED';

export function addSelected(value) {
  return {
    type: SELECTED,
    value : value
  };
}