import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
	id: number;
	title: string;
	completed: boolean,
}

const initialState: Todo[] = []

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			if (action.payload === '') {
				return state
			} else {
				return [
					...state,
					{
						id: Date.now(),
						title: action.payload,
						completed: false
					}
				]
			}
		},
		removeTodo: (state, action: PayloadAction<number>) => {
			return state.filter((todo) => todo.id !== action.payload)
		},
		toggleTodo: (state, action: PayloadAction<number>) => {
			return state.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo
			);
		},
		clearTodo: () => {
			return initialState
		},
	}
})

export const { addTodo, removeTodo, clearTodo, toggleTodo, } = todoSlice.actions
export const reducerTodo = todoSlice.reducer