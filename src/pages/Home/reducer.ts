import reducerRegistry from '../../redux/registerReducer';
import actionTypes from './constants';
import { HomeState, HomeActions } from './types';

export const initialState: HomeState = {
    isLoading: false,
    completed: false,
    posts: [],
};

const homeReducer = (
    state: HomeState = initialState,
    action: HomeActions,
) => {
    switch (action.type) {
        case actionTypes.INIT_PAGE:
            return initialState;
        case actionTypes.REQUEST_GET_POSTS_START:
            return {
                ...state,
                isLoading: true,
                completed: false,
            };
        case actionTypes.REQUEST_GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
                completed: true,
            };
        case actionTypes.REQUEST_GET_POSTS_ERROR:
            return {
                ...state,
                isLoading: false,
                completed: false,
            };
        default:
            return state;
    }
};

reducerRegistry.register('home', homeReducer)

// export default homeReducer;
