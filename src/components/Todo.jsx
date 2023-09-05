import { useDispatch, useSelector } from "react-redux"
import { clearTodo, removeTodo, toggleTodo } from "../redux/slices/sliceTodo"
import { useParams } from "react-router-dom"


const Todo = () => {

	const dispatch = useDispatch()
	const { filter } = useParams()

	const todos = useSelector((state) => {
		if (filter === 'active') {
			return state.todo.filter(todo => !todo.completed)
		} else if (filter === 'completed') {
			return state.todo.filter(todo => todo.completed)
		}
		return state.todo
	});

	return (
		<div className="new-todo">
			{todos.length ? (
				todos.map((todo) => {
					return (
						<div key={todo.id}>
							<input type="checkbox" checked={todo.completed} onChange={() => { dispatch(toggleTodo(todo.id)) }} />
							<label>{todo.title}</label>
							<button onClick={() => dispatch(removeTodo(todo.id))}>удалить</button>
						</div>
					)
				})
			) : <p>Нет списка задач</p>}

			<div className="info">
				<span >задачи {todos.length}</span>
				<button onClick={() => dispatch(clearTodo())}>очистить все</button>
			</div>
		</div >
	)
}

export { Todo }