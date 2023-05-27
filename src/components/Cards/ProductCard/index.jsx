import { Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { ShoppingCart } from "lucide-react";

import ProductImage from "../../Product/ProductImage";
import PaperBlock from "../../Papers/PaperBlock";

import { floatToBRL } from "../../../helpers/floatToBRL";

import "./styles.css";
import "../../../index.css";

function ProductCard({
  id,
  nome,
  fotoUrl,
  valorUnitario,
  tempoPreparo,
  disponivel,
  handleAddToCart,
}) {
  const addToCart = () => {
    const item = {
      id,
      nome,
      fotoUrl,
      valorUnitario,
      tempoPreparo,
      disponivel,
      handleAddToCart,
    };
    handleAddToCart(item);
  };
  return (
    <>
      <PaperBlock className="productCard">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <ProductImage fotoUrl={fotoUrl} />
          <Typography className="productName" fontWeight="bold" fontSize={21}>
            {nome}
          </Typography>
          <Typography
            fontWeight="bold"
            color={disponivel === true ? "#AAFF33" : "#FF0000"}
          >
            {disponivel === true ? "Disponível" : "Indisponível"}
          </Typography>
          {disponivel === true ? (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <AccessTimeIcon />
              <Typography ml="2px" fontWeight="extraBold" fontSize={18}>
                Tempo de preparo: {tempoPreparo} min
              </Typography>
            </Grid>
          ) : (
            ""
          )}
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            mt="10px"
          >
            <Typography fontWeight="bold" fontSize={22}>
              {floatToBRL(valorUnitario)}
            </Typography>
            <button
              onClick={addToCart}
              style={{ backgroundColor: "#5767aa" }}
              className="addCartButton"
            >
              <ShoppingCart size={22} color="#FFFFFF" fill="#FFFFFF" />
            </button>
          </Grid>
        </Grid>
      </PaperBlock>
    </>
  );
}

export default ProductCard;
