import React from "react";

function Header() {
	return (
		<header className="row block center">
			<div>
				<a href="#/">
					<h1>CC10 Shop</h1>
				</a>
			</div>
			<div>
				<a href="#">
					<h3>
						Cart<button>3</button>
					</h3>
				</a>
			</div>
		</header>
	);
}

export default Header;
