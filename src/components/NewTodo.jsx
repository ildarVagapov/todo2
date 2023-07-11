import { useDispatch } from "react-redux"
import { addTodoAC } from "../redux/reducers/reducerTodo"

const NewTodo = () => {
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addTodoAC(e.target.title.value))
		e.target.reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="new todo" name="title" />
			<button>add</button>
		</form>
	)
}

export { NewTodo }