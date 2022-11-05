import { combineReducers } from "redux";
import { alertReducer } from "../reducer/alert.reducer";
import { authReducer } from "../reducer/auth.reducer";

export const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer

})