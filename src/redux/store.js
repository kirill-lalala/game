import {customizationReducer} from "./customization-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

let reducers = combineReducers({
    customizationPage: customizationReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;