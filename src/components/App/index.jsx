import Footer from "../Footer";
import Navbar from "../Views/Navbar";
import { CartProvider } from "../../Contexts/CartContext";

import "./styles.css";
import "../../index.css";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
