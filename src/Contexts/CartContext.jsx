import { createContext, useState, useContext } from 'react';
import cogoToast from 'cogo-toast';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }

    cogoToast.success('Produto adicionado ao carrinho!');
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

  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalItems = cartItems.length;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.valorUnitario * item.quantity,
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
        totalProducts,
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
