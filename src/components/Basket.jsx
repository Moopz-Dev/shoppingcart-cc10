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
				<div>Product Name</div>
				<div>
					<button className="add">+</button>
					<button className="remove">-</button>
				</div>
				<div className="col-2 text-right">3 x $5000.00</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-2">Items Price</div>
				<div className="col-1 text-right">$10000.00</div>
			</div>
			<div className="row">
				<div className="col-2">Tax</div>
				<div className="col-1 text-right">$700.00</div>
			</div>
			<div className="row">
				<div className="col-2">Shipping</div>
				<div className="col-1 text-right">$20.00</div>
			</div>
			<div className="row text-bold">
				<div className="col-2">Total</div>
				<div className="col-1 text-right">$17200.00</div>
			</div>
		</aside>
	);
}

export default Basket;
