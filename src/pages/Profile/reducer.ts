import reducerRegistry from '../../redux/registerReducer';
import actionTypes from './constants';
import { ProfileState, ProfileActions } from './types';

export const initialState: ProfileState = {
    isLoading: false,
    completed: false,
    data: {},
};

const profileReducer = (
    state: ProfileState = initialState,
    action: ProfileActions,
) => {
    switch (action.type) {
        case actionTypes.INIT_PAGE:
            return initialState;
        case actionTypes.REQUEST_GET_PROFILE_START:
            return {
                ...state,
                isLoading: true,
                completed: false,
            };
        case actionTypes.REQUEST_GET_PROFILE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                completed: true,
            };
        case actionTypes.REQUEST_GET_PROFILE_ERROR:
            return {
                ...state,
                isLoading: false,
                completed: false,
            };
        default:
            return state;
    }
};

reducerRegistry.register('profile', profileReducer)

export default profileReducer;
