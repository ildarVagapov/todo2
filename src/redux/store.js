import { legacy_createStore, combineReducers } from "redux";
import { reducerTodo } from "./reducers/reducerTodo";
import { reducerFilter } from "./reducers/reducerFilter";
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";

const reducer = combineReducers({
	todo: reducerTodo,
	filter: reducerFilter
})

const persistedState = loadState()

const store = legacy_createStore(reducer, persistedState)
store.subscribe(throttle(() => saveState({ todo: store.getState().todo }), 1000))

export { store }