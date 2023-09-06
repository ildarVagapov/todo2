import { selectTodo } from "../selectors/selectTodo";
import { RootState } from "../store";

describe('selectTodo', () => {
	it('should return all todos when filter is "all"', () => {
		const state: RootState = {
			todo: [
				{ id: 1, title: 'Task 1', completed: false },
				{ id: 2, title: 'Task 2', completed: true },
			],
		};

		const filter = 'all';
		const result = selectTodo(state, filter);

		expect(result).toEqual(state.todo);
	});

});


