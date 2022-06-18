import { TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./actionTypes"


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
        default : {
            {return state}
        }
    }
}