import { Store, createStore, applyMiddleware, compose } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import { Saga, Task } from 'redux-saga';
import thunk from 'redux-thunk';

import createReducer from './reducers';
import { ApplicationRootState } from './types';

declare const window: any;

const configureStore: (initialState?: ApplicationRootState | Record<string, never>) => Store = (
    initialState: ApplicationRootState | Record<string, never> = {},
) => {
    // Add dev tool
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancers = [
        applyMiddleware(thunk),
        createInjectorsEnhancer({
            createReducer,
            runSaga: function <S extends Saga<any[]>>(_saga: S, ..._args: Parameters<S>): Task<any> {
                throw new Error('Function not implemented.');
            }
        }),
    ]

    const store = createStore(createReducer({}), initialState, composeEnhancers(...enhancers));

    return store;
};

export default configureStore;
