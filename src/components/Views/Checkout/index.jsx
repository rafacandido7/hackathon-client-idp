import { Divider, Grid, Typography, Button } from "@mui/material";
import { useCart } from "../../../Contexts/CartContext";
import ProductImage from "../../Product/ProductImage";
import { useRef, useState } from "react";
import QRCode from "qrcode.react";

function Checkout() {
  const {
    cartItems,
    removeFromCart,
    totalItems,
    clearCart,
    getMaxPreparationTime,
    totalPrice,
  } = useCart();

  const [showQRCode, setShowQRCode] = useState(false);
  const qrCodeRef = useRef(null);

  const generateQRCode = () => {
    setShowQRCode(true);
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <Typography variant="h4">Carrinho</Typography>
        <Typography variant="body1">Seu carrinho está vazio.</Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h4">Carrinho</Typography>

      <ul>
        {cartItems.map((item) => (
          <>
            <Divider />
            <li key={item.id}>
              <Grid
                container
                direction="row"
                padding={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <ProductImage fotoUrl={item.fotoUrl} />
                <Typography variant="body1">
                  {item.nome} - Quantidade: {item.quantity ? item.quantity : 1}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </Button>
              </Grid>
            </li>
          </>
        ))}
      </ul>
      <Divider />

      <Grid container direction="column" alignItems="flex-start">
        <Typography padding={1} variant="body1">
          Total de itens: {totalItems}
        </Typography>
        <Typography padding={1} variant="body1">
          Tempo de preparo máximo: {getMaxPreparationTime()} minutos
        </Typography>

        <Typography padding={1} variant="body1">
          Total a pagar: R$ {totalPrice.toFixed(2)}
        </Typography>

        <Grid item direction="column">
          <Grid item padding={4}>
            <Button variant="contained" color="primary" onClick={clearCart}>
              Limpar Carrinho
            </Button>
          </Grid>
          <Grid item padding={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={generateQRCode}
            >
              Gerar Pedido
            </Button>
          </Grid>
        </Grid>

        {showQRCode && (
          <Grid
            container
            direction="column"
            padding="10px"
            mt={5}
            mb={10}
            justifyContent="center"
            alignItems="center"
          >
            <Typography mb={5} variant="h5" fontWeight={"bold"}>
              QR Code com o Pedido
            </Typography>
            <QRCode
              value={JSON.stringify(cartItems)}
              size={200}
              ref={qrCodeRef}
            />
            <Typography>{JSON.stringify(cartItems)}</Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Checkout;
