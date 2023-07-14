import { useDispatch, useSelector } from "react-redux"
import { removeTodoAC, toggleTodoAC, visibalTodo } from "../redux/reducers/reducerTodo"
import { useParams } from "react-router-dom"

const Todo = () => {
	const dispatch = useDispatch()
	const { filter } = useParams()

	// const todos = useSelector((state) => {
	// 	switch (filter) {
	// 		case 'all':
	// 			return state.todo
	// 		case 'active':
	// 			return state.todo.filter((todo) => !todo.complited)
	// 		case 'complited':
	// 			return state.todo.filter((todo) => todo.complited)
	// 	}
	// })
	const todos = useSelector((state) => visibalTodo(state.todo, filter))



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