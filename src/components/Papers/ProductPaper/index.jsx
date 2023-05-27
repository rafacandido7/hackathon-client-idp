import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../../Cards/ProductCard';

import { useCart } from '../../../Contexts/CartContext';

import { getProducts } from '../../../services/api';

import './styles.css';

function ProductPaper() {
  const { addToCart, totalItems } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Carregando produtos...</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      justifyContent='center'
      spacing={2}
    >
      {products.map((product) => (
        <Grid item key={product.id}>
          <ProductCard
            className='productCard'
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
      <Typography>
        Total de itens no carrinho: {totalItems}
      </Typography>
    </Grid>
  );
}

export default ProductPaper;
