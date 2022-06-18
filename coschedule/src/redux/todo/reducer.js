import { GET_FAILURE, GET_REQUEST, GET_SUCCESS, TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./actionTypes"


const initState= {
    loading: false,
    error: false,
     data: []
}

export const todoReducer = (state = initState,action) =>{
    switch(action.type){
        case TODO_REQUEST:{
            return {
                ...state,
                loading: true,
                error: false,
               data: []
            }
        }
        case TODO_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false,
         
            }
        }
        case TODO_FAILURE:{
            return {
                ...state,
                loading: false,
                error: true,
               data: []
            }
        }
        case GET_REQUEST:{
            return {
                ...state,
                loading: true,
                error: false,
               data: []
            }
        }
        case GET_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        }
        case GET_FAILURE:{
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