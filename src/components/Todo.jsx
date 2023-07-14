import { useDispatch, useSelector } from "react-redux"
import { removeTodoAC, selectTodoByFilter, toggleTodoAC } from "../redux/reducers/reducerTodo"
import { useParams } from "react-router-dom"


const Todo = () => {
	const { filter } = useParams()
	const dispatch = useDispatch()
	const todos = useSelector((state) => selectTodoByFilter(state, filter));

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