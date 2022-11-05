import * as ActionType from  '../ActionType'; 

export const signUpAction = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGNUP_USER , payload : data})
}

export const signInAction = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGNIN_USER , payload : data})
}

export const signOutAction = () => (dispatch) => {
    dispatch({type : ActionType.SIGNOUT_USER})
}

export const signedInAction = (data) => (dispatch) => {
    dispatch({type : ActionType.SIGNEDIN_USER , payload : data})
}

export const signedOutAction = () => (dispatch) => {
    dispatch({type : ActionType.SIGNEDOUT_USER})
}

export const forgotPassAction = (data) => (dispatch) => {
    dispatch({type : ActionType.FORGOTPASS_USER , payload : data})
}

export const SignWithGoogle = () => (dispatch) => {
    dispatch({type : ActionType.SIGNINWITHGOOGLE})
}
