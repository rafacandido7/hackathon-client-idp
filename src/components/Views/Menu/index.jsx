import Header from "./Header"
import ProductPaper from "../../Papers/ProductPaper"
import { CartProvider } from "../../../Contexts/CartContext"

 function FoodMenu() {
  return (
    <div className="container">
      <CartProvider>
        <Header />
        <ProductPaper />
      </CartProvider>
    </div>

  )
}

export default FoodMenu
