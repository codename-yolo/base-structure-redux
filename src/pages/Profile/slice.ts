import { createSlice } from '@reduxjs/toolkit'
import actionTypes from './constants';
import { ProfileState } from './types';

export const initialState: ProfileState = {
    isLoading: false,
    completed: false,
    data: {},
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        [actionTypes.INIT_PAGE]: (state) => {
            state = initialState
        },
        [actionTypes.REQUEST_GET_PROFILE_START]: (state) => {
            state.isLoading = true
            state.completed = false
        },
        [actionTypes.REQUEST_GET_PROFILE_SUCCESS]: (state, action) => {
            state.data = action.payload
            state.isLoading = false
            state.completed = true
        },
        [actionTypes.REQUEST_GET_PROFILE_ERROR]: (state) => {
            state.isLoading = false
            state.completed = false
        }
    }
})

export const { [actionTypes.INIT_PAGE]: initPage,
    [actionTypes.REQUEST_GET_PROFILE_START]: getProfileStart,
    [actionTypes.REQUEST_GET_PROFILE_SUCCESS]: getProfileSuccess,
    [actionTypes.REQUEST_GET_PROFILE_ERROR]: getProfileError
} = profileSlice.actions

export default profileSlice.reducer;
