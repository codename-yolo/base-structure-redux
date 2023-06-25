import { Store, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './saga';
import { ApplicationRootState } from './types';

const sagaMiddleware = createSagaMiddleware();

declare const window: any;

const configureStore: (initialState?: ApplicationRootState | Record<string, never>) => Store = (
    initialState: ApplicationRootState | Record<string, never> = {},
) => {
    // Add dev tool redux
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    // Run saga
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
