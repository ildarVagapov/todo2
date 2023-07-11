const SET_FILTER = 'SET_FILTER'

const reducerFilter = (state = 'all', action) => {
	switch (action.type) {
		case SET_FILTER:
			return action.filter
		default: {
			return state
		}
	}
}

export const setFilterAC = (filter) => ({ type: SET_FILTER, filter: filter })

export { reducerFilter }