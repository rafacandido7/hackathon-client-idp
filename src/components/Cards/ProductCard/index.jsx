import { Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ShoppingCart } from 'lucide-react';

import ProductImage from '../../Product/ProductImage';
import PaperBlock from '../../Papers/PaperBlock';

import { floatToBRL } from '../../../helpers/floatToBRL';

import './styles.css';
import '../../../index.css';

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
      <PaperBlock className='productCard'>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        backgroundColor='#fff'
        borderRadius='80'
      >
          <ProductImage fotoUrl={fotoUrl} />
          <Typography className='productName' fontFamily='Baloo2ExtraBold' fontSize={23}>
            {nome}
          </Typography>
          <Typography
            fontFamily='Baloo2ExtraBold'
            color={disponivel === true ? '#2ECC71' : '#FF0000'}
          >
            {disponivel === true ? 'Disponível' : 'Indisponível'}
          </Typography>
          {disponivel === true ? (
            <Grid
              container
              direction='row'
              alignItems='center'
              justifyContent='center'
            >
              <AccessTimeIcon />
              <Typography ml='5px' fontFamily='Baloo2Regular' fontSize={18}>
                 {tempoPreparo} min
              </Typography>
            </Grid>
          ) : (
            ''
          )}
          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='center'
            mt='10px'
          >
            <Typography fontFamily={"Baloo2Regular"} fontSize={28} fontWeight={'bold'}>
              {floatToBRL(valorUnitario)}
            </Typography>
            <button
              onClick={addToCart}
              style={{ backgroundColor: '#2A9F85' }}
              className='addCartButton'
            >
              <ShoppingCart size={22} color='#fff' fill='#fff' />
            </button>
          </Grid>
        </Grid>
      </PaperBlock>
    </>
  );
}

export default ProductCard;
