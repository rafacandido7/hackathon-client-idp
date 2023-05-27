import { Typography, Button } from "@mui/material";
import { useCart } from "../../../Contexts/CartContext";

function Checkout() {
  const { cartItems, removeFromCart, totalItems, clearCart, getMaxPreparationTime, totalPrice } =
    useCart();

  return (
    <div>
      <Typography variant="h4">Carrinho</Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Seu carrinho está vazio.</Typography>
      ) : (
        <div>
          <Typography variant="body1">Total de itens: {totalItems}</Typography>

          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <Typography variant="body1">
                  {item.nome} - Quantidade: {item.quantity}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </Button>
              </li>
            ))}
          </ul>

          <Typography variant="body1">Tempo de preparo máximo: {getMaxPreparationTime()} minutos</Typography>

          <Typography variant="body1">Total a pagar: R$ {totalPrice.toFixed(2)}</Typography>

          <Button variant="contained" color="primary" onClick={clearCart}>
            Limpar Carrinho
          </Button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
