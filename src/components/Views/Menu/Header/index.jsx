import './styles.css'

import ImagemHome from './assets/imagem-header.png'


function Header() {
  return (
    <div id="main">
        <div className="header-heading">
            <div className="header-content">
                <div className="text-container">
                    <h3 style={{ fontSize: 40, fontFamily: "Baloo2ExtraBold" }}>Conheça os pratos que vão tornar seus dias inesquecíveis.</h3>
                    <p style={{ fontSize: 20 }}>Desfrute de refeições saborosas e nutritivas, especialmente preparadas para acompanhar sua jornada acadêmica.</p>
                </div>
                <div className="image-container">
                    <img src={ImagemHome} alt="Imagem Header" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;
