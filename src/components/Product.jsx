import React from "react";

function Product() {
	return (
		<div>
			<img className="small" src="https://picsum.photos/800" alt="product1" />
			<h3>Product Name</h3>
			<div>5000</div>
			<div>
				<button>Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;
