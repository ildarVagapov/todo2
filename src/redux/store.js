import { legacy_createStore, combineReducers } from "redux";
import { reducerTodo } from "./reducers/reducerTodo";
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";
import { reducerFilter } from "./reducers/reducerFilter";

const reducer = combineReducers({
	todo: reducerTodo,
})

const persistedState = loadState()

const store = legacy_createStore(reducer, persistedState)
store.subscribe(throttle(() => saveState({ todo: store.getState().todo }), 1000))

export { store }