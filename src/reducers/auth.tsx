import { createAction, ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';
import files from 'assets/User';

//  Actions Type
export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const REGISTER = 'auth/REGISTER';
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

//  Actions
export const changeField = createAction(CHANGE_FIELD)<any>();
export const initializeForm = createAction(INITIALIZE_FORM)<any>();
export const register = createAction(REGISTER)<any>();
export const login = createAction(LOGIN)<any>();

// Sagas
const registerSuccess = createAction(REGISTER_SUCCESS)<any>();
const registerFailer = createAction(REGISTER_FAILURE)<any>();
const loginSuccess = createAction(LOGIN_SUCCESS)<any>();
const loginFailer = createAction(LOGIN_FAILURE)<any>();

const actions = {
    changeField,
    initializeForm,
    register,
    registerSuccess,
    registerFailer,
    login,
    loginSuccess,
    loginFailer,
};

type AuthActions = ActionType<typeof actions>;

interface AuthState {
    register: object;
    login: object;
    auth: any;
    authError: any;
    user: object[];
}
// Default State
let userList = JSON.parse(localStorage.getItem('user') || '');
const initialState: AuthState = {
    user: userList.length > 0 ? userList : files,
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    },
    auth: null,
    authError: null,
};

const AuthReducer = createReducer<AuthState, AuthActions>(initialState, {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
        produce(state, draft => {
            draft[form][key] = value;
        }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) =>
        produce(state, draft => {
            draft.authError = null;
            draft[form] = initializeForm[form];
        }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) =>
        produce(state, draft => {
            draft.authError = null;
            draft.auth = auth;
            draft.user = state.user.concat(auth);
            localStorage.setItem(
                'user',
                JSON.stringify(state.user.concat(auth)),
            );
        }),
    [REGISTER_FAILURE]: (state, { payload: error }) =>
        produce(state, draft => {
            draft.authError = error;
        }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) =>
        produce(state, draft => {
            draft.authError = null;
            draft.auth = auth;
        }),
    [LOGIN_FAILURE]: (state, { payload: error }) =>
        produce(state, draft => {
            draft.authError = error;
        }),
});

export default AuthReducer;
