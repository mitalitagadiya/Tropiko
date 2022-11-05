import { all } from "redux-saga/effects";
import { SignUpSaga } from "../saga/auth.saga";

export function* rootSaga(){
    yield all([
        SignUpSaga()
    ])
}