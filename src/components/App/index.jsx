import { useEffect, useState } from "react";

import Footer from "../Footer";
import ProductPaper from "../Papers/ProductPaper";

import "./styles.css";

async function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <ProductPaper />

      <Footer />
    </div>
  );
}

export default App;
