import React from "react";
import AddTodo from "./AddComponent";
import RenderList from "./RenderListComponent";
import FilterTodos from "./FilterListComponent";

function Header() {

	return (
		<>
			<p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
				<span className="fa fa-check-square me-1"></span>
				<u>My Todo-s</u>
			</p>

			<div className="pb-2">
				<div className="card">
					<div className="card-body">
						<AddTodo />

					</div>
				</div>
			</div>

			<FilterTodos />

			<hr className="my-4" />

			<RenderList />
		</>
	);
}

export default Header;