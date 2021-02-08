import React from 'react';
import { Link } from 'react-router-dom';
import './ClothingJewelryMenu.scss';


function ElectronicsMenu(props) {
  return (
    <div className="clothing-jewelry-menu">
      <div className="clothing-jewelry-menu-items">
        <Link to="/clothing&jewelry/apperal">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="clothing-jewelry-menu-items">
        <Link to="/clothing&jewelry/chainz">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="clothing-jewelry-menu-items">
        <Link to="/clothing&jewelry/watchz">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="clothing-jewelry-menu-items">
        <Link to="/clothing&jewelry/grillz">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="clothing-jewelry-menu-items">
        <Link to="/clothing&jewelry/pendantz">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ElectronicsMenu;
