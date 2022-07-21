import React from "react";
import { useDispatch } from "react-redux";
import { setVisibilityFilter, VisibilityFilters } from "../redux/actions";

function FilterTodos() {
	const dispatch = useDispatch();

	const showAll = () => {
		dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
	};

	const showCompleted = () => {
		dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
	};

	const showActive = () => {
		dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
	};

	const filterTodos = (value) => {
		switch (value) {
			case "showAll":
				showAll();
				break;
			case "showCompleted":
				showCompleted();
				break;
			case "showActive":
				showActive();
				break;
			default:
				showAll();
				break;
		}
	};

	return (
		<div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
			<p className="small mb-0 me-2 text-muted">Filter</p>
			<select className="select" onChange={(event) => filterTodos(event.target.value)}>
				<option value="showAll" >All</option>
				<option value="showCompleted" >Completed</option>
				<option value="showActive" >Active</option>
			</select>
		</div>
	);
}

export default FilterTodos;