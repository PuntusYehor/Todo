import { useSelector, useDispatch } from "react-redux";
import { completeTodoAction, VisibilityFilters, deleteTodoAction } from "../redux/actions";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const RenderItem = ({ todo }) => {
	const dispatch = useDispatch();

	const completeTodo = (id) => {
		dispatch(completeTodoAction(id));
	};

	const deleteTodo = (id) => {
		dispatch(deleteTodoAction(id));
	};

	return (
		<>
			<ul className="list-group list-group-horizontal rounded-0 bg-transparent">
				<li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
					<div className="form-check">
						<input className="form-check-input me-0" type="checkbox" value=""
							aria-label="..." onChange={() => completeTodo(todo.id)} checked={
								todo.completed ? true : false} />
					</div>
				</li>
				<li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
					<p className="lead fw-normal mb-0" style={{
						textDecoration: todo.completed ? 'line-through' : 'none'
					}}>{todo.description}</p>
				</li>
				<li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
					<div className="d-flex flex-row justify-content-end mb-1">
						<a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"
							onClick={() => deleteTodo(todo.id)}>
							{<FontAwesomeIcon icon={faTrashCan} />}
						</a>
					</div>
					<div className="text-end text-muted">
						<a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
							<p className="small mb-0"><span className="fa fa-info-circle me-2"></span>{todo.date}</p>
						</a>
					</div>
				</li>
			</ul>
		</>
	);
}

const RenderList = () => {
	const visibility = useSelector(state => state.visibility);
	const todos = useSelector(state => state.todos);
	if (todos.length === 0) return <div></div>

	const showAllList = todos.map(todo => {
		return todo ? (
			<div key={todo.id}>
				<RenderItem todo={todo} />
			</div>
		) : <div></div>;
	});

	const showCompletedList = todos.map(todo => {
		return todo && todo.completed ? (
			<div key={todo.id}>
				<RenderItem todo={todo} />
			</div>) : <div></div>;
	});

	const showActiveList = todos.map(todo => {
		return todo && !todo.completed ? (
			<div key={todo.id}>
				<RenderItem todo={todo} />
			</div>) : <div></div>;
	});

	switch (visibility) {
		case VisibilityFilters.SHOW_ALL:
			return (<>{showAllList}</>)
		case VisibilityFilters.SHOW_ACTIVE:
			return (<>{showActiveList}</>)
		case VisibilityFilters.SHOW_COMPLETED:
			return (<>{showCompletedList}</>)
		default:
			return (<>{showAllList}</>)
	}
};

export default RenderList;