import './styles.css'
import { useRef } from 'react';

import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
        <img className='logo' src='https://www.idp.edu.br/wp-content/themes/idp_principal_2020/img/id-idp.png' />
        <nav ref={navRef}>
          <a href="">Home</a>
          <a href="/#">Sobre Nós</a>
          <a href="/#">Avaliação</a>
          <button className='nav-button nav-close-button' onClick={showNavBar}>
              <CloseIcon />
          </button>
        </nav>
        <button className='nav-button' onClick={showNavBar}>
          <ListIcon />
        </button>
    </header>
  )
}

export default Navbar;