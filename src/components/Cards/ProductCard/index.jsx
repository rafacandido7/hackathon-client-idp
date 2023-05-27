import { Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import ProductImage from '../../Product/ProductImage';

import { floatToBRL } from '../../../helpers/floatToBRL';
import PaperBlock from '../../Papers/PaperBlock';

import './styles.css';

function ProductCard({
	nome,
	fotoUrl,
	valorUnitario,
	tempoPreparo,
	disponivel,
}) {
	return (
		<>
			<PaperBlock className='productCard'>
				<Grid
					container
					direction='column'
					alignItems='center'
					justifyContent='center'
				>
					<ProductImage fotoUrl={fotoUrl} />
					<Typography className='productName' fontWeight='bold' fontSize={21}>
						{nome}
					</Typography>
					<Typography
						fontWeight='bold'
						color={disponivel === true ? '#AAFF33' : '#FF0000'}
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
							<Typography ml='2px' fontWeight='bold' fontSize={18}>
								Tempo de preparo: {tempoPreparo} min
							</Typography>
						</Grid>
					) : (
						''
					)}
					<Typography fontWeight='bold' fontSize={18}>
						{floatToBRL(valorUnitario)}
					</Typography>
				</Grid>
			</PaperBlock>
		</>
	);
}

export default ProductCard;
