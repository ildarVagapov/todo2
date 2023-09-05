import { configureStore } from "@reduxjs/toolkit";
import { reducerTodo } from "./slices/sliceTodo";


export const store = configureStore({
	reducer: {
		todo: reducerTodo
	},
	devTools: true
})

export type RootState = ReturnType<typeof store.getState>