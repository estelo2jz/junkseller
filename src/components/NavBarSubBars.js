import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
              <ArrowBackIcon />
            </DropdownItem>
          {/* <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Electronics</h2>
          </DropdownItem> */}
            <Link to="/electronics">
              <DropdownItem>
                <div className="menu-category-heading">
                  <p>Electronics</p>
                </div>
              </DropdownItem>
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/computers">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Computers</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/computers/tablet">
            <DropdownItem>Computers, Tablets & PC</DropdownItem>
          </Link>
          <Link to="/computers/monitors">
            <DropdownItem>Monitors</DropdownItem>
          </Link>
          <Link to="/computers/accessories">
            <DropdownItem>Accessories</DropdownItem>
          </Link>
          <Link to="/computers/networking">
            <DropdownItem>Networking</DropdownItem>
          </Link>
          <Link to="/computers/harddrives&storage">
            <DropdownItem>Hard Drives & Storage</DropdownItem>
          </Link>
          <Link to="/computers/parts&components">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/beauty&health">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Beauty & Health</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/beauty&health/allbeauty">
            <DropdownItem>All Beauty</DropdownItem>
          </Link>
          <Link to="/beauty&health/premiumbeauty">
            <DropdownItem>Premium Beauty</DropdownItem>
          </Link>
          <Link to="/beauty&health/skincare">
            <DropdownItem>Professional Skin Care</DropdownItem>
          </Link>
          <Link to="/beauty&health/salon&spa">
            <DropdownItem>Salonn Spa</DropdownItem>
          </Link>
          <Link to="/beauty&health/mensgrooming">
            <DropdownItem>Men's Grooming</DropdownItem>
          </Link>
          <Link to="/beauty&health/health&household&baby">
            <DropdownItem>Health, Household & Baby</DropdownItem>
          </Link>
          <Link to="/beauty&health/vitamins&diet">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/food&grocery">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Food & Grocery</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/food&grocery/grocery&gourmet">
            <DropdownItem>Grocery & Gourmet</DropdownItem>
          </Link>
          <Link to="/food&grocery/fresh">
            <DropdownItem>Fresh</DropdownItem>
          </Link>
          <Link to="/food&grocery/wholefoods">
            <DropdownItem>Whole Foods</DropdownItem>
          </Link>
          <Link to="/food&grocery/pantry">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/home&garden&tools">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Home, Garden & Tools</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/home&garden&tools/home">
            <DropdownItem>Home</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/appliances">
            <DropdownItem>Appliances</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/arts&crafts">
            <DropdownItem>Arts Crafts & Sewing</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/bed&bath">
            <DropdownItem>Bed & Bath</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/collective&fineart">
            <DropdownItem>Collective & Fine Art</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/discover">
            <DropdownItem>Discover</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/events&partysupplies">
            <DropdownItem>Events & Party Supplies</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/exploreshowroom">
            <DropdownItem>Explore Showroom</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/fineart">
            <DropdownItem>Fine Art</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/furniture">
            <DropdownItem>Furniture</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/garden&outdoor">
            <DropdownItem>Garden & Outdoor</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/homedecor">
            <DropdownItem>Home Decor</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/kitchen&dining">
            <DropdownItem>Kitchen & Dining</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/lighting">
            <DropdownItem>Lighting</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/mattresses">
            <DropdownItem>Mattresses</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/petsupplies">
            <DropdownItem>Pet Supplies</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/shoproom">
            <DropdownItem>Shop by Room</DropdownItem>
          </Link>
          <Link to="/home&garden&tools/storage&organization">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/handmade">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Handmade</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/handmade/allhandmade">
            <DropdownItem>All Handmade</DropdownItem>
          </Link>
          <Link to="/handmade/gifts">
            <DropdownItem>Gifts</DropdownItem>
          </Link>
          <Link to="/handmade/jewelry">
            <DropdownItem>Jewelry</DropdownItem>
          </Link>
          <Link to="/handmade/home&kitchen">
            <DropdownItem>Home & Kitchen</DropdownItem>
          </Link>
          <Link to="/handmade/wedding">
            <DropdownItem>Wedding</DropdownItem>
          </Link>
          <Link to="/handmade/clothing&shoes">
            <DropdownItem>Clothing & Shoes</DropdownItem>
          </Link>
          <Link to="/handmade/handbags&accessories">
            <DropdownItem>Handbags & Accessories</DropdownItem>
          </Link>          
          <Link to="/handmade/beauty&grooming">
            <DropdownItem>Beauty & Grooming</DropdownItem>
          </Link>
          <Link to="/handmade/stationary&partysupplies">
            <DropdownItem>Stationary & Party Supplies</DropdownItem>
          </Link>
          <Link to="/handmade/toys&games">
            <DropdownItem>Toys & Games</DropdownItem>
          </Link>
          <Link to="/handmade/petsupplies">
            <DropdownItem>Pet Suppleis</DropdownItem>
          </Link>
          <Link to="/handmade/homedecor">
            <DropdownItem>Home Decor</DropdownItem>
          </Link>
          <Link to="/handmade/artwork">
            <DropdownItem>Artwork</DropdownItem>
          </Link>
          <Link to="/handmade/kitchen&dining">
            <DropdownItem>Kitchen & Dining</DropdownItem>
          </Link>
          <Link to="/handmade/furniture">
            <DropdownItem>Furniture</DropdownItem>
          </Link>
          <Link to="/handmade/baby">
            <DropdownItem>Baby</DropdownItem>
          </Link>
          <Link to="/handmade/sellon">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/outdoors">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Outdoors</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/outdoors/outdoorclothing">
            <DropdownItem>Outdoor Clothing</DropdownItem>
          </Link>
          <Link to="/outdoors/camping&hiking">
            <DropdownItem>Camping & Hiking</DropdownItem>
          </Link>
          <Link to="/outdoors/climbing">
            <DropdownItem>Climbing</DropdownItem>
          </Link>
          <Link to="/outdoors/cycling">
            <DropdownItem>Cycling</DropdownItem>
          </Link>
          <Link to="/outdoors/scooters&skates&skateboards">
            <DropdownItem>Scooters, Skates & Skateboards</DropdownItem>
          </Link>
          <Link to="/outdoors/watersports">
            <DropdownItem>Water Sports</DropdownItem>
          </Link>
          <Link to="/outdoors/wintersports">
            <DropdownItem>Winter Sports</DropdownItem>
          </Link>
          <Link to="/outdoors/accessories">
            <DropdownItem>Accessories</DropdownItem>
          </Link>
          <Link to="/outdoors/alloutdoor">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/pet&supplies">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Pet & Supplies</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/pet&supplies/petprofiles">
            <DropdownItem>Pet Profiles</DropdownItem>
          </Link>
          <Link to="/pet&supplies/dogsupplies">
            <DropdownItem>Dog Supplies</DropdownItem>
          </Link>
          <Link to="/pet&supplies/dogfood">
            <DropdownItem>Dog Food</DropdownItem>
          </Link>
          <Link to="/pet&supplies/catsupplies">
            <DropdownItem>Cat Supplies</DropdownItem>
          </Link>
          <Link to="/pet&supplies/catfood">
            <DropdownItem>Cat Food</DropdownItem>
          </Link>
          <Link to="/pet&supplies/fish&aquatic">
            <DropdownItem>Fish & Aquatic Pets</DropdownItem>
          </Link>
          <Link to="/pet&supplies/smallanimals">
            <DropdownItem>Small Animals</DropdownItem>
          </Link>
          <Link to="/pet&supplies/birds">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/smarthome">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Smart Home</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/smarthome/smarthome">
            <DropdownItem>Smart Home</DropdownItem>
          </Link>
          <Link to="/smarthome/smarthomelighting">
            <DropdownItem>Smart Home Lighting</DropdownItem>
          </Link>
          <Link to="/smarthome/smartlocks&entry">
            <DropdownItem>Smart Lock and Entry</DropdownItem>
          </Link>
          <Link to="/smarthome/securitycameras&systems">
            <DropdownItem>Security Cameras & Systems</DropdownItem>
          </Link>
          <Link to="/smarthome/plugs&outlets">
            <DropdownItem>Plugs & Outlets</DropdownItem>
          </Link>
          <Link to="/smarthome/newsmartdevices">
            <DropdownItem>New Smart Devices</DropdownItem>
          </Link>
          <Link to="/smarthome/heating&cooling">
            <DropdownItem>Heating & Cooling</DropdownItem>
          </Link>
          <Link to="/smarthome/detectors&sensors">
            <DropdownItem>Detectors & Sensors</DropdownItem>
          </Link>
          <Link to="/smarthome/homeentertainment">
            <DropdownItem>Home Entertainment</DropdownItem>
          </Link>
          <Link to="/smarthome/pet">
            <DropdownItem>Pet</DropdownItem>
          </Link>
          <Link to="/smarthome/voiceassistants&hubs">
            <DropdownItem>Voice Assistants & Hubs</DropdownItem>
          </Link>
          <Link to="/smarthome/kitchen">
            <DropdownItem>Kitchen</DropdownItem>
          </Link>
          <Link to="/smarthome/vacuum&mops">
            <DropdownItem>Vacuums & Mops</DropdownItem>
          </Link>
          <Link to="/smarthome/lawn&garden">
            <DropdownItem>Lawn & Garden</DropdownItem>
          </Link>
          <Link to="/smarthome/wifi&networking">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/toys&kids&baby">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Toys, Kids & Baby</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/toys&kids&baby/toys&games">
            <DropdownItem>Toys & Games</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby/baby/">
            <DropdownItem>Baby</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby/diapering">
            <DropdownItem>Diapering</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby/videogamekids">
            <DropdownItem>Video Game for Kids</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby/family">
            <DropdownItem>Family</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby/teen">
            <DropdownItem>Teen</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby/babyregistry">
            <DropdownItem>Baby Registry</DropdownItem>
          </Link>
          <Link to="/toys&kids&baby/kidsbirthdays">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/sports">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Sports</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/sports/athleticclothing">
            <DropdownItem>Athletic Clothing</DropdownItem>
          </Link>
          <Link to="/sports/exercise&fitness">
            <DropdownItem>Exercise & Fitness</DropdownItem>
          </Link>
          <Link to="/sports/hunting&fishing">
            <DropdownItem>Hunting & Fishing</DropdownItem>
          </Link>
          <Link to="/sports/golf">
            <DropdownItem>Golf</DropdownItem>
          </Link>
          <Link to="/sports/fanshop">
            <DropdownItem>Fan Shop</DropdownItem>
          </Link>
          <Link to="/sports/leisure&game">
            <DropdownItem>Leisure Sports & Game Room</DropdownItem>
          </Link>
          <Link to="/sports/sports&collectibles">
            <DropdownItem>Sports & Collectibles</DropdownItem>
          </Link>
          <Link to="/sports/allsports&fitness">
            <DropdownItem>All Sports & Fitness</DropdownItem>
          </Link>
          <Link to="/sports/newgearinnovations">
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
            <ArrowBackIcon />
          </DropdownItem>
          <Link to="/automotive&industrial">
            <DropdownItem>
              <div className="menu-category-heading">
                <p>Automotive & Industrial</p>
              </div>
            </DropdownItem>
          </Link>
          <Link to="/automotive&industrial/parts&accessories">
            <DropdownItem>Automotive Parts & Accessories</DropdownItem>
          </Link>
          <Link to="/automotive&industrial/tools&equipment">
            <DropdownItem>Automotive Tools & Equipment</DropdownItem>
          </Link>
          <Link to="/automotive&industrial/carelectronics&gps">
            <DropdownItem>Car/Vehicle Electronics & GPS</DropdownItem>
          </Link>
          <Link to="/automotive&industrial/tires&wheels">
            <DropdownItem>Tires & Wheel</DropdownItem>
          </Link>
          <Link to="/automotive&industrial/motorcycle&powersports">
            <DropdownItem>Motorcycle & PowerSports</DropdownItem>
          </Link>
          <Link to="/automotive&industrial/rvpart&accessories">
            <DropdownItem>RV Parts & Accessories</DropdownItem>
          </Link>
          <Link to="/automotive&industrial/vehicles">
            <DropdownItem>Vehicles</DropdownItem>
          </Link>
          <Link to="/automotive&industrial/yourgarage">
            <DropdownItem>Your Garage</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;