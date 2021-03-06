import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

const initState= {
    loading: false,
    error: false,
    token: []
}

export const authReducer = (state = initState,action) =>{
    switch(action.type){
        case AUTH_REQUEST:{
            return {
                ...state,
                loading: true,
                error: false,
                token: []
            }
        }
        case AUTH_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false,
                token: action.payload
            }
        }
        case AUTH_FAILURE:{
            return {
                ...state,
                loading: false,
                error: true,
                token: []
            }
        }
        default : {
            {return state}
        }
    }
}