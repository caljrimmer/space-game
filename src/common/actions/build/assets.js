export const ASSET_POST= 'ASSET_POST';
export const ASSET_PUT= 'ASSET_PUT';
export const ASSET_DELETE= 'ASSET_DELETE';

export function addAsset(value) {
  return {
    type: ASSET_POST,
    value : value
  };
}

export function updateAsset(value) {
  return {
    type: ASSET_PUT,
    value : value
  };
}

export function deleteAsset(value) {
  return {
    type: ASSET_DELETE,
    value : value
  };
}
