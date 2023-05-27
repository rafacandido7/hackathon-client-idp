import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../Cards/ProductCard";
import "./styles.css";
import { Button } from "@mui/material";
import { getProducts } from "../../../services/api";

function ProductPaper() {
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
    return <div>Carregando produtos...</div>;
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      {products.map((product) => (
        <Grid item key={product.id}>
          <ProductCard
            className="productCard"
            nome={product.nome}
            fotoUrl={product.fotoUrl}
            valorUnitario={product.valorUnitario}
            tempoPreparo={product.tempoPreparo}
            disponivel={product.disponivel}
          />
          <Button variant="contained" color="">
            Adicionar ao carrinho
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductPaper;
