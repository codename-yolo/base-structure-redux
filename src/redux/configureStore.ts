import { Store, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createInjectorsEnhancer } from 'redux-injectors';
import createReducer from './reducers';
import { ApplicationRootState } from './types';

const sagaMiddleware = createSagaMiddleware()

declare const window: any;

const configureStore: (initialState?: ApplicationRootState | Record<string, never>) => Store = (
    initialState: ApplicationRootState | Record<string, never> = {},
) => {
    // Add dev tool redux
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancers = [
        applyMiddleware(sagaMiddleware),
        createInjectorsEnhancer({
            createReducer,
            runSaga: sagaMiddleware.run,
        }),
    ]

    const store = createStore(
        createReducer({}),
        initialState,
        composeEnhancers(...enhancers),
    );

    return store;
};

export default configureStore;
