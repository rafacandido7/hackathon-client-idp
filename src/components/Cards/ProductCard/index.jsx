import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import ProductImage from '../../Product/ProductImage';
import ProductName from '../../Product/ProductName';

import { floatToBRL } from '../../../helpers/floatToBRL';

function ProductCard({
	nome,
	fotoUrl,
	valorUnitario,
	tempoPreparo,
	disponivel,
}) {
	return (
		<>
			<div className='productCard'>
				<Box
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<ProductImage fotoUrl={fotoUrl} />

					<ProductName nome={nome} />
				</Box>
				<Box mt={0} ml={7}>
					<Box
						direction='row'
						alignItems='flex-end'
						justifyContent='space-between'
					>
						<Box
							direction='column'
							alignItems='flex-end'
							justifyContent='space-between'
						>
							<Typography
								fontWeight={500}
								color={disponivel === true ? '##00FF00' : '#FF0000'}
							>
								{disponivel === true ? 'Disponível' : 'Indisponível'}
							</Typography>
							{disponivel === true ? (
								<Box
									direction='row'
									alignItems='flex-end'
									justifyContent='space-around'
								>
									<AccessTimeIcon />
									<Typography
										fontSize={12}
										style={{ textDecoration: 'line-through' }}
									>
										{tempoPreparo} min
									</Typography>
								</Box>
							) : (
								''
							)}
						</Box>
						<Box justifyContent='center' alignItems='center'>
							{
								<Typography
									fontSize={12}
								>
									{floatToBRL(valorUnitario)}
								</Typography>
							}
						</Box>
					</Box>
				</Box>
			</div>
		</>
	);
}

export default ProductCard;
