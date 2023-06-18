import { Store, createStore } from 'redux';

import createReducer from './reducers';
import { ApplicationRootState } from './types';

const configureStore: (initialState?: ApplicationRootState | Record<string, never>) => Store = (
    initialState: ApplicationRootState | Record<string, never> = {},
) => {
    const store = createStore(createReducer(), initialState);

    return store;
};

export default configureStore;
