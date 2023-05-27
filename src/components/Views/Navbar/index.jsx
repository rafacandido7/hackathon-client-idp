import { useRef } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import FoodMenu from '../Menu';
import AboutUs from '../AboutUs';
import Reviews from '../Reviews';

import './styles.css';
import Checkout from '../Checkout';

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <BrowserRouter>
      <header>
        <img className='logo' src='https://www.idp.edu.br/wp-content/themes/idp_principal_2020/img/id-idp.png' />
        <nav ref={navRef} >
          <Link to="/">Home</Link>
          <Link to="/about">Sobre Nós</Link>
          <Link to="/reviews">Avaliação</Link>
          <Link to="/shopp">
            <LocalGroceryStoreIcon style={{ marginLeft: 150 }} />
          </Link>
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
        <Route path='/reviews' component={Reviews} />
        <Route path='/shopp' component={Checkout} />
      </Switch>
    </BrowserRouter>

  )
}

export default Navbar;
