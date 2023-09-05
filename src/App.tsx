import { Link } from "react-router-dom";
import { Filter } from "./components/Filter";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./components/Todo";

export const App: React.FC = () => {
	return (
		<div className="App">
			<Link to='/'>
				<h2 style={{ color: 'yellow' }}>TodoList</h2>
			</Link>
			<NewTodo />
			<Filter />
			<Todo />
		</div>
	);
}

