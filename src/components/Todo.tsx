import { useDispatch, useSelector } from "react-redux"
import { clearTodo, removeTodo, toggleTodo } from "../redux/slices/sliceTodo"
import { selectTodo } from "../redux/selectors/selectTodo"
import { useParams } from "react-router-dom"
import { RootState } from "../redux/store"


const Todo = () => {
	const { filter } = useParams()
	const dispatch = useDispatch()
	const selectedFilter = filter || 'all'
	const todos = useSelector((state: RootState) => selectTodo(state, selectedFilter))

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