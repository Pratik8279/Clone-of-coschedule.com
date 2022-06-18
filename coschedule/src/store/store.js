import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "../redux/auth/reducer";
import thunk from "redux-thunk";
import { todoReducer } from "../redux/todo/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))