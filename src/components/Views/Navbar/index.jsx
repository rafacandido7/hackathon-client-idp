import './styles.css'
import { useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import FoodMenu from '../Menu';
import AboutUs from '../AboutUs';
import Reviews from '../Reviews';

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <BrowserRouter>
      <header>
        <img className='logo' src='https://www.idp.edu.br/wp-content/themes/idp_principal_2020/img/id-idp.png' />
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/about#">Sobre Nós</a>
          <a href="/reviews">Avaliação</a>
          <button className='nav-button nav-close-button' onClick={showNavBar}>
              <CloseIcon />
          </button>
        </nav>
        <button className='nav-button' onClick={showNavBar}>
          <ListIcon />
        </button>

        
      </header>
      
        <Switch>
          <Route path='/' exact component={FoodMenu} />
          <Route path='/about' exact component={AboutUs} />
          <Route path='/review' exact component={Reviews} />
        </Switch>
    </BrowserRouter>
    
  )
}

export default Navbar;