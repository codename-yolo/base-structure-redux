import { GlobalState } from './types';
import ActionTypes from './constants';

export const initialState: GlobalState = {
    defaultTheme: localStorage.getItem('defaultTheme') || 'light',
};

const globalReducer: (state: GlobalState | undefined, action: any) => GlobalState = (
    state: GlobalState = initialState,
    action: any,
) => {
    switch (action.type) {
        case ActionTypes.CHANGE_THEME:
            localStorage.setItem('defaultTheme', action.payload);
            window.location.reload();
            return {
                ...state,
                defaultTheme: action.payload,
            };
        case ActionTypes.INIT_PAGE:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default globalReducer;
