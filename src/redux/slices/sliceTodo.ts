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
		setFilterAll: (state) => {
			return state
		},
		setFilterActive: (state) => {
			state = state.filter((todo) => !todo.completed)

		},
		setFilterCompleted: (state) => {
			state.filter((todo) => todo.completed)
			return state
		},
		setFilter: (state, action) => {
			if (action.payload == 'active') {
				state.filter((todo) => !todo.completed)
				return state
			}
		}
	}
})

export const { addTodo, removeTodo, clearTodo, toggleTodo, setFilter, setFilterAll, setFilterCompleted, setFilterActive } = todoSlice.actions
export const reducerTodo = todoSlice.reducer