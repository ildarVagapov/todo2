import { Link, useParams } from "react-router-dom"

const Filter = () => {
	const { filter: activeFilter = 'all' } = useParams()

	return (
		<div className="filter-btn">
			<button><Link to='/all' style={{ color: activeFilter === 'all' ? 'red' : '' }} >all</Link></button>
			<button><Link to='/active' style={{ color: activeFilter === 'active' ? 'red' : '' }} >active</Link></button>
			<button><Link to='/complited' style={{ color: activeFilter === 'complited' ? 'red' : '' }} >complited</Link></button>
		</div>
	)
}
export { Filter }