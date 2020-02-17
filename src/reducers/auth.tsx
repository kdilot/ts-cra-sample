import { createAction, ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';

//  Actions Type
export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

//  Actions
export const changeField = createAction(CHANGE_FIELD)<any>();
export const initializeForm = createAction(INITIALIZE_FORM)<any>();

const actions = {
    changeField,
    initializeForm,
};

type AuthActions = ActionType<typeof actions>;

interface AuthState {
    register: object;
    login: object;
}

// Default State
const initialState: AuthState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    },
};

const AuthReducer = createReducer<AuthState, AuthActions>(initialState, {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
        produce(state, draft => {
            draft[form][key] = value;
        }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
        ...state,
        [form]: initializeForm[form],
    }),
});

export default AuthReducer;
