import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useStateValue } from './StateProvider';
import '../styles/NavBarSubBars.scss';

function App() {
  const [{basket}] = useStateValue();
  console.log(basket);

  const [sidebar, setSidebar] = useState(false);
  return (
    <Navbar>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <div className="navbar__flex">
        <div className="navbar__header">
          <Link to="/"><p>Junk Seller</p></Link>
        </div>
        <div>
          <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
          </Link>
        </div>
      </div>

      {/* <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} /> */}
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {/* <span className="icon-button">{props.leftIcon}</span> */}
        {props.children}
        {/* <span className="icon-right">{props.rightIcon}</span> */}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <div className="menu__department">
            <p>Shop By Department</p>
          </div>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="electronics">
            Electronics
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="computers">
            Computers
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="beauty&health">
            Beauty & Health
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="food&grocery">
            Food & Grocery
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="home&garden&tools">
            Home, Garden & Tools
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="handmade">
            Handmade
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="outdoors">
            Outdoors
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="petsupplies">
            Pet Supplies
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="smarthome">
            Smart Home
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="toys&kids&baby">
            Toys, Kids & Baby
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="sports">
            Sports
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="automotive&industrial">
            Automotive & Industrial
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'electronics'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Electronics</h2>
          </DropdownItem>
            <Link to="/electronics">
              <DropdownItem>Home</DropdownItem>
            </Link>
            <Link to="/electronics/tvvideo">
            {/* <DropdownItem leftIcon={<BoltIcon />}> */}
              <DropdownItem>
                TV & Video
              </DropdownItem>
            </Link>
            <Link to="/electronics/homeaudiotheater">
              <DropdownItem>Home Audio & Theater</DropdownItem>
            </Link>
            <Link to="/electronics/cameraphotovideo">
              <DropdownItem>Camera, Photo & Video</DropdownItem>
            </Link>
            <Link to="/electronics/cellphones">
              <DropdownItem>Cell Phones & Accessories</DropdownItem>
            </Link>
            <Link to="/electronics/headphones">
              <DropdownItem>Headphones</DropdownItem>
            </Link>
            <Link to="/electronics/videogames">
              <DropdownItem>Video Games</DropdownItem>
            </Link>
            <Link to="/electronics/bluetoothwireless">
              <DropdownItem>Bluetooth & Wireless</DropdownItem>
            </Link>
            <Link to="/electronics/carelectronics">
              <DropdownItem>Car Electronics</DropdownItem>
            </Link>
            <Link to="/electronics/musicalinstruments">
              <DropdownItem>Musical Instruments</DropdownItem>
            </Link>
            <Link to="/electronics/wearabletechnology">
              <DropdownItem>Wearable Technology</DropdownItem>
            </Link>
            <Link to="/electronics/electronicsbase">
              <DropdownItem>Electronics</DropdownItem>
            </Link>

        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'computers'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Computers</h2>
          </DropdownItem>
          <Link to="/computers">
            <DropdownItem>Computers, Tablets & PC</DropdownItem>
          </Link>
          <Link to="/computers">
            <DropdownItem>Monitors</DropdownItem>
          </Link>
          <Link to="/computers">
            <DropdownItem>Accessories</DropdownItem>
          </Link>
          <Link to="/computers">
            <DropdownItem>Networking</DropdownItem>
          </Link>
          <Link to="/computers">
            <DropdownItem>Hard Drives & Storage</DropdownItem>
          </Link>
          <Link to="/computers">
            <DropdownItem>Computer Parts & Components</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'beauty&health'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Beauty & Health</h2>
          </DropdownItem>
          <Link to="/beauty&health">
            <DropdownItem>All Beauty</DropdownItem>
          </Link>
          <Link to="/beauty&health">
            <DropdownItem>Premium Beauty</DropdownItem>
          </Link>
          <Link to="/beauty&health">
            <DropdownItem>Professional Skin Care</DropdownItem>
          </Link>
          <Link to="/beauty&health">
            <DropdownItem>Salonn Spa</DropdownItem>
          </Link>
          <Link to="/beauty&health">
            <DropdownItem>Men's Grooming</DropdownItem>
          </Link>
          <Link to="/beauty&health">
            <DropdownItem>Health, Household & Baby</DropdownItem>
          </Link>
          <Link to="/beauty&health">
            <DropdownItem>Vitamins & Dietary Supplements</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'food&grocery'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Food & Grocery</h2>
          </DropdownItem>
          <Link to="/food&grocery">
            <DropdownItem>Grocery & Gourmet</DropdownItem>
          </Link>
          <Link to="/food&grocery">
            <DropdownItem>Fresh</DropdownItem>
          </Link>
          <Link to="/food&grocery">
            <DropdownItem>Whole Foods</DropdownItem>
          </Link>
          <Link to="/food&grocery">
            <DropdownItem>Pantry</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'home&garden&tools'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Home, Garden & Tools</h2>
          </DropdownItem>
          <Link to="/home&garden&tools">
            <DropdownItem>Home</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Appliances</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Arts Crafts & Sewing</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Bed & Bath</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Collective & Fine Art</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Discover</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Events & Party Supplies</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Explore Showroom</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Fine Art</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Furniture</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Garden & Outdoor</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Home Decor</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Kitchen & Dining</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Lighting</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Mattresses</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Pet Supplies</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Shop by Room</DropdownItem>
          </Link>
          <Link to="/home&garden&tools">
            <DropdownItem>Storage & Organization</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'handmade'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Handmade</h2>
          </DropdownItem>
          <Link to="/handmade">
            <DropdownItem>All Handmade</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Gifts</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Jewelry</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Home & Kitchen</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Wedding</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Clothing & Shoes</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Handbags & Accessories</DropdownItem>
          </Link>          
          <Link to="/handmade">
            <DropdownItem>Beauty & Grooming</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Stationary & Party Supplies</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Toys & Games</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Pet Suppleis</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Home Decor</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Artwork</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Kitchen & Dining</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Furniture</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Baby</DropdownItem>
          </Link>
          <Link to="/handmade">
            <DropdownItem>Sell on JunkSeller</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'outdoors'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Outdoors</h2>
          </DropdownItem>
          <Link to="/outdoors">
            <DropdownItem>Outdoor Clothing</DropdownItem>
          </Link>
          <Link to="/outdoors">
            <DropdownItem>Camping & Hiking</DropdownItem>
          </Link>
          <Link to="/outdoors">
            <DropdownItem>Climbing</DropdownItem>
          </Link>
          <Link to="/outdoors">
            <DropdownItem>Cycling</DropdownItem>
          </Link>
          <Link to="/outdoors">
            <DropdownItem>Scooters, Skates & Skateboards</DropdownItem>
          </Link>
          <Link to="/outdoors">
            <DropdownItem>Water Sports</DropdownItem>
          </Link>
          <Link to="/outdoors">
            <DropdownItem>Winter Sports</DropdownItem>
          </Link>
          <Link to="/outdoors">
            <DropdownItem>Accessories</DropdownItem>
          </Link>
          <Link to="/outdoors">
            <DropdownItem>All Outdoor Recreation</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'petsupplies'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Pet Supplies</h2>
          </DropdownItem>
          <Link to="/pet&supplies">
            <DropdownItem>Pet Profiles</DropdownItem>
          </Link>
          <Link to="/pet&supplies">
            <DropdownItem>Dog Supplies</DropdownItem>
          </Link>
          <Link to="/pet&supplies">
            <DropdownItem>Dog Food</DropdownItem>
          </Link>
          <Link to="/pet&supplies">
            <DropdownItem>Cat Supplies</DropdownItem>
          </Link>
          <Link to="/pet&supplies">
            <DropdownItem>Cat Food</DropdownItem>
          </Link>
          <Link to="/pet&supplies">
            <DropdownItem>Fish & Aquatic Pets</DropdownItem>
          </Link>
          <Link to="/pet&supplies">
            <DropdownItem>Small Animals</DropdownItem>
          </Link>
          <Link to="/pet&supplies">
            <DropdownItem>Birds</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'smarthome'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Smart Home</h2>
          </DropdownItem>
          <Link to="/smarthome">
            <DropdownItem>Smart Home</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Smart Home Lighting</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Smart Lock and Entry</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Security Cameras & Systems</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Plugs & Outlets</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>New Smart Devices</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Heating & Cooling</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Detectors & Sensors</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Home Entertainment</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Pet</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Voice Assistants & Hubs</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Kitchen</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Vacuums & Mops</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>Lawn & Garden</DropdownItem>
          </Link>
          <Link to="/smarthome">
            <DropdownItem>WiFi & Networking</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'toys&kids&baby'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Toys, Kids & Baby</h2>
          </DropdownItem>
          <Link to="/toys&kids&baby">
            <DropdownItem>Toys & Games</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby">
            <DropdownItem>Baby</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby">
            <DropdownItem>Diapering</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby">
            <DropdownItem>Video Game for Kids</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby">
            <DropdownItem>Family</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby">
            <DropdownItem>Teen</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby">
            <DropdownItem>Baby Registry</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby">
            <DropdownItem>Kids Birthdays</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'sports'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Sports</h2>
          </DropdownItem>
          <Link to="/sports">
            <DropdownItem>Athletic Clothing</DropdownItem>
          </Link>
          <Link to="/sports">
            <DropdownItem>Exercise & Fitness</DropdownItem>
          </Link>
          <Link to="/sports">
            <DropdownItem>Hunting & Fishing</DropdownItem>
          </Link>
          <Link to="/sports">
            <DropdownItem>Golf</DropdownItem>
          </Link>
          <Link to="/sports">
            <DropdownItem>Fan Shop</DropdownItem>
          </Link>
          <Link to="/sports">
            <DropdownItem>Leisure Sports & Game Room</DropdownItem>
          </Link>
          <Link to="/sports">
            <DropdownItem>Sports & Collectibles</DropdownItem>
          </Link>
          <Link to="/sports">
            <DropdownItem>All Sports & Fitness</DropdownItem>
          </Link>
          <Link to="/sports">
            <DropdownItem>New Gear Innovations</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'automotive&industrial'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Automotive & Industrial</h2>
          </DropdownItem>
          <Link to="/automotive&industrialy">
            <DropdownItem></DropdownItem>
          </Link>
          <Link to="/automotive&industrialy">
            <DropdownItem>Automotive Parts & Accessories</DropdownItem>
          </Link>
          <Link to="/automotive&industrialy">
            <DropdownItem>Automotive Tools & Equipment</DropdownItem>
          </Link>
          <Link to="/automotive&industrialy">
            <DropdownItem>Car/Vehicle Electronics & GPS</DropdownItem>
          </Link>
          <Link to="/automotive&industrialy">
            <DropdownItem>Tires & Wheel</DropdownItem>
          </Link>
          <Link to="/automotive&industrialy">
            <DropdownItem>Motorcycle & PowerSports</DropdownItem>
          </Link>
          <Link to="/automotive&industrialy">
            <DropdownItem>RV Parts & Accessories</DropdownItem>
          </Link>
          <Link to="/automotive&industrialy">
            <DropdownItem>Vehicles</DropdownItem>
          </Link>
          <Link to="/automotive&industrialy">
            <DropdownItem>Your Garage</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;