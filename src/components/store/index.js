import { createStore, combineReducers } from 'redux';
import viewReducer from './view/reducer';
import noteIdReducer from './noteId/reducer';

const reducers = combineReducers({
    viewReducer,
    noteIdReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;