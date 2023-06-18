import { combineReducers } from 'redux';

import globalReducer from './global/reducer';

/**
 * Merges all reducer
 */
const createReducer = () => {
    return combineReducers({
        global: globalReducer,
    });
};

export default createReducer;
