import { createAction, ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';

//  Actions Type
export const START_LOADING = 'auth/START_LOADING';
export const FINISH_LOADING = 'auth/FINISH_LOADING';

//  Actions
export const startLoading = createAction(START_LOADING)<any>();
export const finishLoading = createAction(FINISH_LOADING)<any>();

const actions = {
    startLoading,
    finishLoading,
};

type LoadingActions = ActionType<typeof actions>;

interface LoadingState {}

// Default State
const initialState: LoadingState = {};

const LoadingReducer = createReducer<LoadingState, LoadingActions>(
    initialState,
    {
        [START_LOADING]: (state, action) =>
            produce(state, draft => {
                draft[action.payload] = true;
            }),
        [FINISH_LOADING]: (state, action) =>
            produce(state, draft => {
                draft[action.payload] = false;
            }),
    },
);

export default LoadingReducer;
