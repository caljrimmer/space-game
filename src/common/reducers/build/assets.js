import {
  ASSETS_POST,
  ASSETS_GET,
  ASSETS_PUT,
  ASSETS_DELETE
} from '../../actions/build/assets';

import _ from 'lodash';

export default function assets(state = [], action) {
    switch (action.type) {
        case ASSETS_POST:
            return [...state, action.value];
        case ASSETS_DELETE:
            return _.filter(state, (item) => {
                return item.id !== action.value;
            });
        case ASSETS_PUT:
            return _.filter(state, (item) => {
                return item.id !== action.value;
            });
        default:
            return state;
    }
}