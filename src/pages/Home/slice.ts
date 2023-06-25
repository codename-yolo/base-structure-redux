import { createSlice } from '@reduxjs/toolkit'
import actionTypes from './constants';
import { HomeState } from './types';

export const initialState: HomeState = {
    isLoading: false,
    completed: false,
    posts: [],
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        [actionTypes.INIT_PAGE]: (state) => {
            state = initialState
        },
        [actionTypes.REQUEST_GET_POSTS_START]: (state) => {
            state.isLoading = true
            state.completed = false
        },
        [actionTypes.REQUEST_GET_POSTS_SUCCESS]: (state, action) => {
            state.posts = action.payload
            state.isLoading = false
            state.completed = true
        },
        [actionTypes.REQUEST_GET_POSTS_ERROR]: (state) => {
            state.isLoading = false
            state.completed = false
        }
    }
})

export const { [actionTypes.INIT_PAGE]: initPage,
    [actionTypes.REQUEST_GET_POSTS_START]: getListPostStart,
    [actionTypes.REQUEST_GET_POSTS_SUCCESS]: getListPostSuccess,
    [actionTypes.REQUEST_GET_POSTS_ERROR]: getListPostError
} = homeSlice.actions

export default homeSlice.reducer;
