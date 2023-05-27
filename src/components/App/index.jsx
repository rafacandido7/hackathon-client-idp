import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Views/Menu";
import AboutUs from "../Views/AboutUs";
import Reviews from "../Views/Reviews";
import Footer from "../Footer";

import Navbar from "../Navbar";

import "./styles.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/reviews" component={Reviews} />
					<Route exact path="/" component={Menu} />
					<Route path="/aboutus" component={AboutUs} />
				</Switch>
			</BrowserRouter>

			<Footer />
		</div>
	);
}

export default App;
