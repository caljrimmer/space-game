import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

//Build reducer
import assets from './build/assets';
import selected from './build/selected';
import backgrounds from './build/backgrounds';

const rootReducer = combineReducers({
    router: routerStateReducer,
    assets: assets,
    selected: selected,
    backgrounds: backgrounds
});

export default rootReducer;