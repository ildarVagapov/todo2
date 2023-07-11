import { useDispatch, useSelector } from "react-redux"
import { removeTodoAC, toggleTodoAC, visibalTodo } from "../redux/reducers/reducerTodo"

const Todo = () => {
	const dispatch = useDispatch()
	// const todos = useSelector((state) => visibalTodo(state.todo, state.filter))
	const todos = useSelector((state) => {
		switch (state.filter) {
			case 'all':
				return state.todo
			case 'active':
				return state.todo.filter((todo) => !todo.complited)
			case 'complited':
				return state.todo.filter((todo) => todo.complited)
		}
	})

	return (
		<div className="new-todo">
			{todos.length ? (
				todos.map((todo) => {
					return (
						<div key={todo.id}>
							<input type="checkbox" checked={todo.complited} onChange={() => { dispatch(toggleTodoAC(todo.id)) }} />
							<label>{todo.title}</label>
							<button onClick={() => dispatch(removeTodoAC(todo.id))}>Delete</button>
						</div>
					)
				})
			) : <p>Нет списка задач</p>}
		</div >
	)
}

export { Todo }