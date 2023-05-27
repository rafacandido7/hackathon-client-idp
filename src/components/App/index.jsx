import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Views/Menu";
import AboutUs from "../Views/AboutUs";
import Reviews from "../Views/Reviews";

import Navbar from "../Navbar";

import FoodMenu from "../Views/Menu";

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
      <FoodMenu />
		</div>
	);
}

export default App;
