import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import { useStateValue } from './StateProvider';
import Logo from './logo/junk.png';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

import ESHOPLOGO from './logo/eshoplogo.png'


function NavBar() {
  const [{basket}] = useStateValue();
  console.log(basket);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="global-header">
        <div className="row">
           <>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='navbar'>
                        <div className="navbar__bar-title">
                            <Link to='#' className='menu-bars'>
                                <FaIcons.FaBars onClick={showSidebar} />
                            </Link>
                            <Link to="/" className="menu-title" >
                                  <img src={ESHOPLOGO} />
                            </Link>
                        </div>
                        <Link to="/checkout" className="header__link">
                            <div className="header__optionBasket">
                                <ShoppingBasketIcon />
                                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                            </div>
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars close'>
                                {/* <AiIcons.AiOutlineClose /> */}
                                Close
                            </Link>
                        </li>
                        <div className="navbar__items-container">
                            {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {/* {item.icon} */}
                                        <p>{item.title}</p>
                                    </Link>
                                </li>
                            );
                            })}
                        </div>
                    </ul>
                    </nav>
                </IconContext.Provider>
            </>
        </div>
    </header>
  )
}

export default NavBar
