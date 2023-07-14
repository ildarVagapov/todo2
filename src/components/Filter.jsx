import { Link, useParams } from "react-router-dom"

const Filter = () => {
	const { filter: activeFilter = 'all' } = useParams()

	return (
		<div className="filter-btn">
			<button><Link to='/all' style={{ color: activeFilter === 'all' ? 'red' : '' }} >все</Link></button>
			<button><Link to='/active' style={{ color: activeFilter === 'active' ? 'red' : '' }} >активные</Link></button>
			<button><Link to='/complited' style={{ color: activeFilter === 'complited' ? 'red' : '' }} >выполненные</Link></button>
		</div>
	)
}
export { Filter }