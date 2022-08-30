import {applyMiddleware, createStore} from "redux";
import {userReducer} from "./redux/userReducer";
import thunk from "redux-thunk";

export const store = createStore(userReducer,applyMiddleware(thunk));