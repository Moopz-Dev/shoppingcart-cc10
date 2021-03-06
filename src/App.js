import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<div className="row">
					<Main />
					<Basket />
				</div>
			</div>
		</div>
	);
}

export default App;
