import { Store, createStore, compose } from 'redux';

import createReducer from './reducers';
import { ApplicationRootState } from './types';

declare const window: any;

const configureStore: (initialState?: ApplicationRootState | Record<string, never>) => Store = (
    initialState: ApplicationRootState | Record<string, never> = {},
) => {
    const store = createStore(createReducer(), initialState, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

    return store;
};

export default configureStore;
