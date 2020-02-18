import { createAction, ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';

//  Actions Type
export const INITIALIZE = 'write/INITIALIZE';
export const CHANGE_FIELD = 'write/CHANGE_FIELD';
export const WRITE_POST = 'write/WRITE_POST';

//  Actions
export const initialize = createAction(INITIALIZE)<any>();
export const changeField = createAction(CHANGE_FIELD)<any>();
export const writePost = createAction(WRITE_POST)<any>();

// Sagas

const actions = {
    initialize,
    changeField,
    writePost,
};

type WriteActions = ActionType<typeof actions>;

interface WriteState {
    title: string | null;
    body: string | null;
    tags: string[];
    post: boolean;
    postList: object[];
}
// Default State
const initialState: WriteState = {
    title: null,
    body: null,
    tags: [],
    post: false,
    postList: JSON.parse(localStorage.getItem('postList') || '[]'),
};

const WriteReducer = createReducer<WriteState, WriteActions>(initialState, {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
        produce(state, draft => {
            draft[key] = value;
        }),
    [WRITE_POST]: (state, { payload: { title, body, tags, user } }) =>
        produce(state, draft => {
            const data = { title, body, tags, user };
            draft.postList = [...state.postList, data];
            localStorage.setItem(
                'postList',
                JSON.stringify([...state.postList, data]),
            );
            draft.post = true;
        }),
});

export default WriteReducer;
