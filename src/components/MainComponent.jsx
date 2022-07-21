import React from "react";
import Header from "./HeaderComponent";

const Main = () => {
	return (
		<section className="vh-100">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col">
						<div className="card" id="list1">
							<div className="card-body py-4 px-4 px-md-5">
								<Header />

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Main;