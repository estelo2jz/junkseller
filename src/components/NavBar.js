import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import '../styles/Navbar.css';

function NavBar() {
  const [{basket}] = useStateValue();
  console.log(basket);

  return (
    <header className="global-header">
        <div className="row">
            <div className="global-logo">
                <a href="/">Junk-Seller</a>
            </div>
            <nav className="nav-menu">
                <ul>
                    {/* <li><a href="/">Home</a></li> */}
                    <li id="services">
                      <h3>
                        Categories
                      </h3>
                    <div className="sub-nav">
                        {/* <div className="sun-nav-container">

                        </div> */}
                        <div className="sub-nav-col left">
                            <Link to="/electronics" className="sub-nav-box" id="box-1">
                                {/* <div className="icon-background" id="icon-1">
                                    <i className="fab fa-sellsy icon"></i>
                                </div> */}
                                <h4>Electronics</h4>
                            </Link>
                            <Link to="/computers" className="sub-nav-box" id="box-2">
                                {/* <div className="icon-background" id="icon-2">
                                    <i className="fas fa-user-lock icon"></i>
                                </div> */}
                                <h4>Computers</h4>
                            </Link>
                            <Link to="/homegardentools" className="sub-nav-box" id="box-3">
                                {/* <div className="icon-background" id="icon-3">
                                    <i className="fas fa-chart-line icon"></i>
                                </div> */}
                                <h4>Home, Garden & Tools</h4>
                            </Link>
                            <Link to="/petsupplies" className="sub-nav-box" id="box-4">
                                {/* <div className="icon-background" id="icon-4">
                                    <i className="fas fa-hand-holding-usd icon"></i>
                                </div> */}
                                <h4>Pet Supplies</h4>
                            </Link>
                            <Link to="/outdoors" className="sub-nav-box" id="box-7">
                                {/* <div className="icon-background" id="icon-7">
                                    <i className="fas fa-briefcase icon"></i>
                                </div> */}
                                <h4>Outdoors</h4>
                            </Link>
                            <Link to="/automotiveindustrial" className="sub-nav-box" id="box-8">
                                {/* <div className="icon-background" id="icon-8">
                                    <i className="fas fa-phone-alt icon"></i>
                                </div> */}
                                <h4>Automotive & Industrial</h4>
                            </Link>
                        </div>
                        <div className="sub-nav-col right">
                            <Link to="/smarthome" className="sub-nav-box" id="box-5">
                                {/* <div className="icon-background" id="icon-5">
                                    <i className="fas fa-trophy icon"></i>
                                </div> */}
                                <h4>Smart Home</h4>
                            </Link>
                            <Link to="/foodgrocery" className="sub-nav-box" id="box-5">
                                {/* <div className="icon-background" id="icon-5">
                                    <i className="fas fa-trophy icon"></i>
                                </div> */}
                                <h4>Food & Grocery</h4>
                            </Link>
                            <Link to="/beautyhealth" className="sub-nav-box" id="box-6">
                                {/* <div className="icon-background" id="icon-6">
                                    <i className="far fa-calendar-check icon"></i>
                                </div> */}
                                <h4>Beauty & Health</h4>
                            </Link>
                            <Link to="/toyskidsbaby" className="sub-nav-box" id="box-7">
                                {/* <div className="icon-background" id="icon-7">
                                    <i className="fas fa-briefcase icon"></i>
                                </div> */}
                                <h4>Toys, Kids & Baby</h4>
                            </Link>
                            <Link to="/handmade" className="sub-nav-box" id="box-8">
                                {/* <div className="icon-background" id="icon-8">
                                    <i className="fas fa-phone-alt icon"></i>
                                </div> */}
                                <h4>Handmade</h4>
                            </Link>
                            <Link to="/sports" className="sub-nav-box" id="box-6">
                                {/* <div className="icon-background" id="icon-6">
                                    <i className="far fa-calendar-check icon"></i>
                                </div> */}
                                <h4>Sports</h4>
                            </Link>
                        </div>
                    </div>
                </li>
                </ul>
            </nav>
        </div>
        <div>
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
    </header>
  )
}

export default NavBar
