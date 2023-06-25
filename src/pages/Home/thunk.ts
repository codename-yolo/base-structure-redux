import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { requestGetPostsCompleted, requestGetPostsError, requestGetPostsStart } from './actions';
import HomeServices from './services';

export const getListPost = (): ThunkAction<void, any, null, AnyAction> => {
    return async (dispatch: ThunkDispatch<any, null, AnyAction>) => {
        try {
            dispatch(requestGetPostsStart());
            const data = await HomeServices.getPosts();
            if (data) {
                dispatch(requestGetPostsCompleted(data));
            }
        } catch (error) {
            dispatch(requestGetPostsError());
        }
    };
};
