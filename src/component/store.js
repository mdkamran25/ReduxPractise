import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from "./reducer/indexReducer";
const store = createStore(indexReducer, applyMiddleware(thunk));

export default store;