import {
  BACKGROUNDS_POST,
  BACKGROUNDS_GET,
  BACKGROUNDS_PUT,
  BACKGROUNDS_DELETE
} from '../../actions/build/backgrounds';

import _ from 'lodash';

export default function backgrounds(state = [], action) {
    switch (action.type) {
        case BACKGROUNDS_POST:
            return [...state, action.value];
        case BACKGROUNDS_DELETE:
            return _.filter(state, (item) => {
                return item.id !== action.value;
            });
        default:
            return state;
    }
}