import { legacy_createStore, combineReducers } from "redux";
import { reducerTodo } from "./reducers/reducerTodo";
import { reducerFilter } from "./reducers/reducerFilter";

const reducer = combineReducers({
	todo: reducerTodo,
	filter: reducerFilter
})

const store = legacy_createStore(reducer)

export { store }