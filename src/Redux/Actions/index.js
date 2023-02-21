

export const signup = (values) => {
    return (dispatch) => {
        dispatch({
            type: "REGISTER",
            payload: values
        });
    }
}

export const signin = (values) => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN",
            values
        });
    }
}

export const signout = (email) => {
    return (dispatch) => {
        dispatch({
            type: "LOGOUT" ,
            email
        });
    }
}