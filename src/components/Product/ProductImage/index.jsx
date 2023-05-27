import "./styles.css";

function ProductImage(fotoUrl) {
	return <img className="productImage" src={fotoUrl.fotoUrl} alt='Produto Sem Imagem'/>;
}

export default ProductImage;
