import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/actions";

function AddTodo() {
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();

	const todayDate = new Intl.DateTimeFormat("en-Us", { day: "2-digit", month: "short", year: "numeric" }).format(new Date());

	const addTodo = (description) => {
		if (description) {
			const obj = {
				id: Date.now(),
				completed: false,
				description: description,
				date: todayDate
			};

			dispatch(addTodoAction(obj));
		}
	};

	return (
		<>
			<div className="d-flex flex-row align-items-center">
				<input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
					placeholder="Add new..." onChange={(event) => setDescription(event.target.value)} value={description} />
				<div>
					<button type="button" className="btn btn-primary" onClick={() => {
						addTodo(description);
						setDescription('');
					}}>Add</button>
				</div>
			</div>
		</>
	);

};

export default AddTodo;