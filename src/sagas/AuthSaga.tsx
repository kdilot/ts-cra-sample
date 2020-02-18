import { takeEvery, put, delay } from 'redux-saga/effects';
import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    LOGOUT_SUCCESS,
} from 'reducers/auth';
import { LoginCheck, UserCheck } from 'api/auth';

function* register(action: any) {
    const payload = action.payload;
    const user = yield UserCheck(payload);
    if (user) {
        yield put({
            type: REGISTER_FAILURE,
            payload: '존재하는 아이디입니다.',
        });
        yield delay(1000);
        yield put({
            type: LOGIN_FAILURE,
            payload: null,
        });
    } else {
        yield put({ type: REGISTER_SUCCESS, payload });
    }
}

export function* watchRegister() {
    yield takeEvery(REGISTER, register);
}

function* login(action: any) {
    const payload = action.payload;
    const user = yield LoginCheck(payload);
    if (user) yield put({ type: LOGIN_SUCCESS, payload });
    else {
        yield put({
            type: LOGIN_FAILURE,
            payload: '회원 정보가 일치하지 않습니다.',
        });
        yield delay(1000);
        yield put({
            type: LOGIN_FAILURE,
            payload: null,
        });
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN, login);
}

function* logout(action: any) {
    yield localStorage.removeItem('hash');
    yield put({
        type: LOGOUT_SUCCESS,
        payload: null,
    });
}

export function* watchLogout() {
    yield takeEvery(LOGOUT, logout);
}
