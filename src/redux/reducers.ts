import { AnyAction, Reducer, combineReducers } from 'redux';

import globalReducer from './global/reducer';

/**
 * Merges all reducer
 */

type createReducerFuncType = (injectedReducers: { [key: string]: Reducer<any, AnyAction>; }) => Reducer<any, AnyAction>

const createReducer: createReducerFuncType = (injectedReducers = {}) => combineReducers({
    global: globalReducer,
    ...injectedReducers,
});



export default createReducer;
