import { all } from 'redux-saga/effects';

import watchHomeScreenAction from '../pages/Home/saga';
import watchProfileScreenAction from '../pages/Profile/saga';

export default function* rootSaga() {
    yield all([watchHomeScreenAction(), watchProfileScreenAction()]);
}
