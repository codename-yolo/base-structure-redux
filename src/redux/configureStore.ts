import { createStore, combineReducers } from 'redux';

import createReducer from './reducers';
import reducerRegistry from './registerReducer';

declare const window: any;

const configureStore = () => {
    reducerRegistry.setChangeListener((reducers) => {
        store.replaceReducer(
            combineReducers({
                ...reducers,
            }) as any
        )
    })

    const store = createStore(createReducer(), undefined, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

    return store;
};

export default configureStore;
