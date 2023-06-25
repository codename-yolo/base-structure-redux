import { call, put, takeLatest, race } from 'redux-saga/effects';
import { requestGetProfileCompleted, requestGetProfileError } from './actions';
import actionTypes from './constants';
import ProfileServices from './services';

function* getProfileData(input: any) {
    try {
        const { output } = yield race({
            output: call(ProfileServices.getProfile, input.payload),
        });
        if (output) {
            yield put(requestGetProfileCompleted(output));
        } else {
            yield put(requestGetProfileError());
        }
    } catch (error) {
        yield put(requestGetProfileError());
    }
}

export default function* watchProfileScreenAction() {
    yield takeLatest(actionTypes.REQUEST_GET_PROFILE_START, getProfileData);
}
