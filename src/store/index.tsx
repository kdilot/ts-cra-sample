import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from 'reducers'; //	Reducer(Module) Directory

const store = createStore(Reducers, composeWithDevTools());

export default store;
