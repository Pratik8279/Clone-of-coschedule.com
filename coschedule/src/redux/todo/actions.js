import { GET_FAILURE, GET_REQUEST, GET_SUCCESS, TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./actionTypes"

export const todo_request = () =>({
    type: TODO_REQUEST
})

export const todo_success = () =>({
    type: TODO_SUCCESS
    
})

export const todo_failure = () =>({
    type: TODO_FAILURE
})

export const post_todo = (text) => async(dispatch) =>{
    dispatch(todo_request())
        try {
            let res= await fetch("https://angry-dog-kerchief.cyclic.app/todo",{
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body : JSON.stringify({
                   title:text,
                })
            })
            let data= await res.json();
           
            dispatch(todo_success())
        } catch (error) {
            dispatch(todo_failure());
        }
}

// Get the todos data

export const get_request = () =>({
    type: GET_REQUEST
})

export const get_success = (data) =>({
    type: GET_SUCCESS,
    payload: data
    
})

export const get_failure = () =>({
    type: GET_FAILURE
})

export const get_todoData= ()=> async(dispatch)=> {
    dispatch(get_request());
    try {
        let res= await fetch("https://angry-dog-kerchief.cyclic.app/todo");
        let data= await res.json();
        // console.log(data)
        dispatch(get_success(data))
    } catch (error) {
         dispatch(get_failure())
    }
}