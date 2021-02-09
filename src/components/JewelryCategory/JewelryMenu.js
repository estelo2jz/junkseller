import React from 'react';
import { Link } from 'react-router-dom';
import './JewelryMenu.scss';


function ElectronicsMenu(props) {
  return (
    <div className="jewelry-menu">
      <div className="jewelry-menu-items">
        <Link to="/jewelry/necklaces">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="jewelry-menu-items">
        <Link to="/jewelry/watchs">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="jewelry-menu-items">
        <Link to="/jewelry/earrings">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="jewelry-menu-items">
        <Link to="/jewelry/pendants">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="jewelry-menu-items">
        <Link to="/jewelry/premiumjewelries">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ElectronicsMenu;
