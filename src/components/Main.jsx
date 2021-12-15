import React from "react";
import Product from "./Product";

function Main() {
	return (
		<div className="col-2 block">
			<h2>Products</h2>
			<div className="row">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
}

export default Main;
