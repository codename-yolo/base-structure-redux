import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';
import { ApplicationRootState } from './types';

declare const window: any;

const configureStore: (initialState?: ApplicationRootState | Record<string, never>) => Store = (
    initialState: ApplicationRootState | Record<string, never> = {},
) => {
    // Add redux dev tool
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    );

    return store;
};

export default configureStore;
