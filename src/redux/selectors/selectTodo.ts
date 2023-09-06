import { RootState } from "../store"


export const selectTodo = (state: RootState, filter: string) => {
	if (filter === 'active') {
		return state.todo.filter(todo => !todo.completed)
	} else if (filter === 'completed') {
		return state.todo.filter(todo => todo.completed)
	}
	return state.todo
}
