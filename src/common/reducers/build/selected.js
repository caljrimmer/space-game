import {
    SELECTED
} from '../../actions/build/selected';

export default function selected(state = {}, action) {
    switch (action.type) {
        case SELECTED:
            return Object.assign({}, state, action.value);
        default:
            return state;
    }
}