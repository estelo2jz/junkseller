import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Logo from './logo/junk.png';

import { useStateValue } from './StateProvider';


function Header() {
  const [{basket}] = useStateValue();
  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img src={Logo}  alt="LOGO"/>
      </Link>

      {/* <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div> */}

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Estelo</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Retuns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Ypur</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;
