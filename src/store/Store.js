import { configureStore } from "@reduxjs/toolkit"
import TodoSlice from "./slices/TodoSlice"


export const store = configureStore({
    reducer: {
        todos: TodoSlice,
    }
})

