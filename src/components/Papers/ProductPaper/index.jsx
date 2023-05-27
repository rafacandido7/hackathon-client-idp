import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../../Cards/ProductCard";

import { useCart } from "../../../Contexts/CartContext";

import { getProducts } from "../../../services/api";

import "./styles.css";

function ProductPaper() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Typography display="flex" alignItems="center" justifyContent="center">
        Carregando produtos...
      </Typography>
    );
  }

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Grid>
      <Typography
        variant="h3"
        fontFamily={"Baloo2Regular"}
        fontWeight={"bold"}
        textAlign={"center"}
        padding={7}
      >
        Cárdapio{" "}
      </Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        {products.map((product) => (
          <Grid item key={product.id} padding={2}>
            <ProductCard
              className="productCard"
              id={product.id}
              nome={`${product.categoria.nome} - ${product.nome}`}
              fotoUrl={product.fotoUrl}
              valorUnitario={product.valorUnitario}
              tempoPreparo={product.tempoPreparo}
              disponivel={product.disponivel}
              handleAddToCart={handleAddToCart}
              {...product}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default ProductPaper;
