import { configureStore } from '@reduxjs/toolkit'
import createReducer from './reducers';

export const store = configureStore({
    reducer: {
        ...createReducer(),
    },
    devTools: true
})

export default store;
