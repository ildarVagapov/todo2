import { useDispatch } from "react-redux"
import { addTodo } from "../redux/slices/sliceTodo"

const NewTodo = () => {
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addTodo(e.target.title.value))
		e.target.reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="новая задача" name="title" />
			<button style={{ marginLeft: '10px' }}>добавить</button>
		</form>
	)
}

export { NewTodo }