import { useEffect, useState } from "react";

import Footer from "../Footer";
import ProductPaper from "../Papers/ProductPaper";
import FoodMenu from '../Views/Menu';
import Navbar from '../Views/Navbar';

import "./styles.css";
import '../../index.css';

async function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
			<Navbar />
      <ProductPaper />

			<Footer />
    </div>
  );
}

export default App;
