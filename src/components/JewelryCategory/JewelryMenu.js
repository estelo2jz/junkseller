import React from 'react';
import { Link } from 'react-router-dom';
import './JewelryMenu.scss';


function ElectronicsMenu(props) {
  return (
      <div className="jewelry-menu">
        <div className="jewelry-menu-items">
          <Link to="/handmade/jewelry/necklaces">
            <span>
              {props.category0}
            </span>
          </Link>
        </div>
        <div className="jewelry-menu-items">
          <Link to="/handmade/jewelry/watchs">
            <span>
              {props.category1}
            </span>
          </Link>
        </div>
        <div className="jewelry-menu-items">
          <Link to="/handmade/jewelry/earrings">
            <span>
              {props.category2}
            </span>
          </Link>
        </div>
        <div className="jewelry-menu-items">
          <Link to="/handmade/jewelry/pendants">
            <span>
              {props.category3}
            </span>
          </Link>
        </div>
      </div>
  )
}

export default ElectronicsMenu;
