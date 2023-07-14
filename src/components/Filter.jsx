import { Link, useParams } from "react-router-dom"


const Filter = () => {
	const { filter: activeFilter } = useParams()

	return (
		<div className="filter-btn">
			<Link to='/all' style={{ color: activeFilter === 'all' ? 'red' : '' }} >all</Link>
			<Link to='/active' style={{ color: activeFilter === 'active' ? 'red' : '' }} >active</Link>
			<Link to='/complited' style={{ color: activeFilter === 'complited' ? 'red' : '' }} >complited</Link>
		</div>
	)
}
export { Filter }