import { useDispatch } from "react-redux"
import { addTodo } from "../redux/slices/sliceTodo"
import { FormEvent, useState } from "react"

const NewTodo = () => {
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		dispatch(addTodo(title))
		setTitle('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="новая задача"
				name="title" value={title}
				onChange={(e) => setTitle(e.target.value)} />
			<button style={{ marginLeft: '10px' }}>добавить</button>
		</form>
	)
}

export { NewTodo }