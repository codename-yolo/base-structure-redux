import { combineReducers } from 'redux';

import globalReducer from './global/reducer';
import homeReducer from '../pages/Home/reducer';
import profileReducer from '../pages/Profile/reducer';

/**
 * Merges all reducer
 */
const createReducer = () => {
    return combineReducers({
        global: globalReducer,
        home: homeReducer,
        profile: profileReducer
    });
};

export default createReducer;
