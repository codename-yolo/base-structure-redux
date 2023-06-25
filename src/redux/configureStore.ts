import { Store, createStore, compose } from 'redux';

import createReducer from './reducers';
import { ApplicationRootState } from './types';
import { createInjectorsEnhancer } from 'redux-injectors';
import { Saga, Task } from 'redux-saga';

declare const window: any;

const configureStore: (initialState?: ApplicationRootState | Record<string, never>) => Store = (
    initialState: ApplicationRootState | Record<string, never> = {},
) => {

    const enhancers = [
        createInjectorsEnhancer({
            createReducer,
            runSaga: function <S extends Saga<any[]>>(_saga: S, ..._args: Parameters<S>): Task<any> {
                throw new Error('Function not implemented.');
            }
        })
    ]

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(createReducer({}), initialState, composeEnhancers(...enhancers));


    return store;
};

export default configureStore;
