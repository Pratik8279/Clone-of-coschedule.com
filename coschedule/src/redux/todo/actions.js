import { TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./actionTypes"

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
            let res= await fetch("http://localhost:8080/todo",{
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