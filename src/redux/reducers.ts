import { combineReducers } from 'redux';

import globalReducer from './global/reducer';
import reducerRegistry from './registerReducer';

/**
 * Merges all reducer
 */
const createReducer = () => {
    return combineReducers({
        global: globalReducer,
        ...reducerRegistry.reducers
    });
};

export default createReducer;
