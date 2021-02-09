import React from 'react';
import { Link } from 'react-router-dom';
import './ClothingMenu.scss';


function ElectronicsMenu(props) {
  return (
    <div className="clothing-menu">
      <div className="clothing-menu-items">
        <Link to="/clothing/apparel">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ElectronicsMenu;
