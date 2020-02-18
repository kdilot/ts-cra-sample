import { all, fork } from 'redux-saga/effects';
import { watchRegister, watchLogin, watchLogout } from './AuthSaga';

export function* rootSaga() {
    yield all([fork(watchRegister), fork(watchLogin), fork(watchLogout)]);
}
