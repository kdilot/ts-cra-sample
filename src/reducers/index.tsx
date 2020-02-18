import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import write from './write';

const rootReducer = combineReducers({
    auth,
    loading,
    write,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
