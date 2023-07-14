const REMOVE_TODO = 'REMOVE_TODO'
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

let initialState = []

const reducerTodo = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO: {
			if (action.title === '') {
				return state
			} else {
				return [
					...state,
					{
						id: Date.now(),
						title: action.title,
						complited: false
					}
				]
			}
		}
		case REMOVE_TODO: {
			return state.filter((todo) => todo.id !== action.id)
		}
		case TOGGLE_TODO: {
			return state.map((todo) => {
				return todo.id === action.id ? { ...todo, complited: !todo.complited } : todo
			})
		}
		default: {
			return state
		}
	}
}

export const visibalTodo = (state, filter) => {
	switch (filter) {
		case 'all':
			return state
		case 'active':
			return state.filter((todo) => !todo.complited)
		case 'complited':
			return state.filter((todo) => todo.complited)
	}
}

export const removeTodoAC = (id) => ({ type: REMOVE_TODO, id: id })
export const toggleTodoAC = (id) => ({ type: TOGGLE_TODO, id: id })
export const addTodoAC = (title) => ({ type: ADD_TODO, title: title })

export { reducerTodo }

