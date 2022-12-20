import {createStore, combineReducers} from 'redux';
import {inputValue} from "./Input/reducer";

const rootReducer = combineReducers({
    inputValue
})

const store = createStore(
    rootReducer
);

export default store;
