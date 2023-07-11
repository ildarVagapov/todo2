import { useDispatch, useSelector } from "react-redux"
import { setFilterAC } from "../redux/reducers/reducerFilter"


const Filter = () => {
	const dispatch = useDispatch()
	const activeFilter = useSelector((state) => state.filter)

	return (
		<div className="filter-btn">
			<button onClick={() => dispatch(setFilterAC('all'))} style={{ color: activeFilter === 'all' ? 'red' : '' }} >all</button>
			<button onClick={() => dispatch(setFilterAC('active'))} style={{ color: activeFilter === 'active' ? 'red' : '' }} >active</button>
			<button onClick={() => dispatch(setFilterAC('complited'))} style={{ color: activeFilter === 'complited' ? 'red' : '' }} >complited</button>
		</div>
	)
}
export { Filter }