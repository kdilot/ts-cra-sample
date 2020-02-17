import { createAction, ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';

//  Actions Type
export const ADD = 'test/ADD';

//  Actions
export const add = createAction(ADD)<object>();

const actions = {
    add,
};

type AuthActions = ActionType<typeof actions>;

interface AuthState {
    list: Array<{ title: string; isDone: boolean }>;
}

// Default State
const initialState: AuthState = {
    list: [],
};

const AuthReducer = createReducer<AuthState, AuthActions>(initialState, {
    [ADD]: (state, action: any) =>
        produce(state, draft => {
            draft.list = state.list.concat(action.payload);
        }),
});

export default AuthReducer;
