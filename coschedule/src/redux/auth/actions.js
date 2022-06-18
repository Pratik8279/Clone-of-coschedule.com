import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

export const auth_request = () =>({
    type: AUTH_REQUEST
})

export const auth_success = (data) =>({
    type: AUTH_SUCCESS,
    payload : data
})

export const auth_failure = () =>({
    type: AUTH_FAILURE
})

export const get_auth = (formData) => async(dispatch) =>{
    dispatch(auth_request())
        try {
            let res= await fetch("https://reqres.in/api/login",{
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body : JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            })
            let data= await res.json();
           
            dispatch(auth_success(data.token))
        } catch (error) {
            dispatch(auth_failure());
        }
}