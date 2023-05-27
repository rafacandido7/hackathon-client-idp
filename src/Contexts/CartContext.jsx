import { createContext, useState, useContext } from "react";
import cogoToast from "cogo-toast";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevItems) => {
      const newItems = [...prevItems, item];
      cogoToast.success("Produto adicionado ao carrinho!");
      return newItems;
    });
  }

  function removeFromCart(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function clearCart() {
    setCartItems([]);
  }

  function getMaxPreparationTime() {
    if (cartItems.length === 0) {
      return 0;
    }

    const maxPreparationTime = cartItems.reduce(
      (maxTime, item) => Math.max(maxTime, item.tempoPreparo),
      cartItems[0].tempoPreparo
    );

    return maxPreparationTime;
  }

  const totalItems = cartItems.length;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.valorUnitario,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getMaxPreparationTime,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
