import { Filter } from "./components/Filter";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./components/Todo";

function App() {
	return (
		<div className="App">
			<h2 style={{ color: 'yellow' }}>TodoList</h2>
			<NewTodo />
			<Filter />
			<Todo />
		</div>
	);
}

export default App;
