import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Views/Menu";
import AboutUs from "../Views/AboutUs";
import Reviews from "../Views/Reviews";

import Navbar from "../Navbar";

import FoodMenu from "../Views/Menu";
import ProductCard from "../Cards/ProductCard";

import "./styles.css";

function App() {
	return (
		<div className="App">
			{/* <BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/reviews" component={Reviews} />
					<Route exact path="/" component={Menu} />
					<Route path="/aboutus" component={AboutUs} />
				</Switch>
			</BrowserRouter> */}
			{/*
<FoodMenu />

*/}

			<ProductCard
				nome="Nutela e Morango"
				fotoUrl="https://melhorsaudeagora.org/wp-content/uploads/2019/08/2cb6823c975ee09b0d93e071c71c86d5.jpg"
				valorUnitario="13"
				tempoPreparo="15"
				disponivel={true}
			/>
		</div>
	);
}

export default App;
