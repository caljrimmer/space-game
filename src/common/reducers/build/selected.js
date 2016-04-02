import {
    SELECTED_POST
} from '../../actions/build/selected';

export default function selected(state = {}, action) {
    switch (action.type) {
        case SELECTED_POST:
            return Object.assign({}, state, action.value);
        default:
            return state;
    }
}