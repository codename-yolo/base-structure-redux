import { call, put, takeLatest, race } from 'redux-saga/effects';
import { requestGetPostsCompleted, requestGetPostsStart } from './actions';
import actionTypes from './constants';
import HomeServices from './services';

function* getListPost(input: any) {
    try {
        const { output } = yield race({
            output: call(HomeServices.getPosts, input.payload),
        });
        if (output) {
            yield put(requestGetPostsCompleted(output));
        } else {
            yield put(requestGetPostsStart());
        }
    } catch (error) {
        yield put(requestGetPostsStart());
    }
}

export default function* watchHomeScreenAction() {
    yield takeLatest(actionTypes.REQUEST_GET_POSTS_START, getListPost);
}
