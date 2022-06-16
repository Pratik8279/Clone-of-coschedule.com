import { AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

const initState= {
    loading: false,
    error: false,
    data: []
}

export const authReducer = (state = initState,action) =>{
    switch(action.type){
        case AUTH_REQUEST:{
            return {
                ...state,
                loading: true,
                error: false,
                data: []
            }
        }
        case AUTH_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        }
        case AUTH_REQUEST:{
            return {
                ...state,
                loading: false,
                error: true,
                data: []
            }
        }
        default : {
            {return state}
        }
    }
}