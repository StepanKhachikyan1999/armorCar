import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./Reducers/root.reducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));

 