import React from 'react';
import { Link } from 'react-router-dom';
import './ClothingMenu.scss';


function ElectronicsMenu(props) {
  return (
    <div className="clothing-menu">
      <div className="clothing-menu-items">
        <Link to="/clothing/shirts&tees">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/pants&jeans">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/hoodies&sweaters">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/jackets">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/hats&beanies">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/backpacks">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="clothing-menu-items">
        <Link to="/clothing/socks">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ElectronicsMenu;
