/*
{
    id : 12345,
    assets : [{
        class: 'ship_scout_red',
        offset: [0,1], 
        rotate: 30
    }],
    backgrounds : [{
        class: 'cloud_1',
        offset: [0,1]
    }]
}
*/

import {
    GAME_POST,
    GAME_PUT,
    GAME_DELETE
} from '../../actions/build/game';

import {
    ASSET_POST,
    ASSET_PUT,
    ASSET_DELETE
} from '../../actions/build/assets';

import {
    BACKGROUND_POST,
    BACKGROUND_PUT,
    BACKGROUND_DELETE
} from '../../actions/build/backgrounds';

import uuid from 'uuid';

export default function game(state = {
    id: '',
    meta: {},
    assets: [],
    backgrounds: []
}, action) {
    switch (action.type) {

        case GAME_POST:
            return Object.assign({}, state, {
                id: uuid.v1(),
                meta: {
                    size: action.value.size,
                    title: action.value.title,
                    desc: action.value.desc
                }
            });
        case GAME_DELETE:
            return Object.assign({}, state, {
                meta: {}
            });
        case GAME_PUT:
            return Object.assign({}, state, {
                meta: {
                    size: action.value.size,
                    title: action.value.title,
                    desc: action.value.desc
                }
            });

        case ASSET_POST:
            action.value.id = uuid.v1();
            const newAssets = state.assets.concat(action.value);
            return Object.assign({}, state, {
                assets: newAssets
            });
        case ASSET_DELETE:
            const deleteAssets = _.remove(state.assets,{id : action.value});
            return Object.assign({}, state, {
                assets: deleteAssets
            });
        case ASSET_PUT:
            const updatedAssets = _.map(state, (item) => {
                if (item.id !== action.value.id) {
                    action.value
                }
                return item;
            });
            return Object.assign({}, state, {
                assets: updatedAssets
            });

        case BACKGROUND_POST:
            action.value.id = uuid.v1();
            const newBackgrounds = state.assets.concat(action.value);
            return Object.assign({}, state, {
                backgrounds: newBackgrounds
            });
        case BACKGROUND_DELETE:
            const deleteupdatedBackgrounds = _.remove(state.assets,{id : action.value});
            return Object.assign({}, state, {
                backgrounds: deleteBackgrounds
            });
        case BACKGROUND_PUT:
            const updatedBackgrounds = _.map(state, (item) => {
                if (item.id !== action.value.id) {
                    action.value
                }
                return item;
            });
            return Object.assign({}, state, {
                backgrounds: updatedBackgrounds
            });

        default:
            return state;
    }
}