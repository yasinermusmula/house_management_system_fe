import {applyMiddleware, legacy_createStore as createStore,combineReducers} from "redux";
import {userReducer} from "./reducers/UserActionReducer";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";

const reducers = combineReducers({
    userReducer
})
export const store = createStore(reducers,applyMiddleware(thunk,logger));