import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
    requestGetProfileStart,
    requestGetProfileCompleted,
    requestGetProfileError,
} from './actions';
import ProfileServices from './services';

export const getProfileData = (id: string): ThunkAction<void, any, null, AnyAction> => {
    return async (dispatch: ThunkDispatch<any, null, AnyAction>) => {
        try {
            dispatch(requestGetProfileStart());
            const data = await ProfileServices.getProfile(id);
            if (data) {
                dispatch(requestGetProfileCompleted(data));
            }
        } catch (error) {
            dispatch(requestGetProfileError());
        }
    };
};
