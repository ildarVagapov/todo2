import { Filter } from "./components/Filter";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./components/Todo";

function App() {
	return (
		<div className="App">
			<h2>TodoList</h2>
			<NewTodo />
			<Todo />
			<Filter />
		</div>
	);
}

export default App;
