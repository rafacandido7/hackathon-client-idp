import Footer from "../Footer";
import Navbar from '../Views/Navbar';

import "./styles.css";
import '../../index.css';
import ProductPaper from "../Papers/ProductPaper";

function App() {
  return (
    <div className="App">
			<Navbar />
      <ProductPaper />

			<Footer />
    </div>
  );
}

export default App;
