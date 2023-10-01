import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            console.log(action);
            state.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed 
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer