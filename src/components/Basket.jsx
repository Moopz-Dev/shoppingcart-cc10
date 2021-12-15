import React from "react";

function Basket() {
	return (
		<aside className="col-1 block">
			<h2>Cart Items</h2>
			<div className="row">
				<div>Product Name</div>
				<div>
					<button className="add">+</button>
					<button className="remove">-</button>
				</div>
				<div className="col-2 text-right">3 x $5000.00</div>
			</div>
			<div className="row">
				<div>Product name</div>
				<div></div>
			</div>
		</aside>
	);
}

export default Basket;
