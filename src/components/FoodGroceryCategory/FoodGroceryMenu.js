import React from 'react';
import { Link } from 'react-router-dom';
import './FoodGroceryMenu.scss';


function FoodGroceryMenu(props) {
  return (
    <div className="food-grocery-menu">
      <div className="food-grocery-menu-items">
        <Link to="/food&grocery/grocery&gourmet">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="food-grocery-menu-items">
        <Link to="/food&grocery/fresh">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="food-grocery-menu-items">
        <Link to="/food&grocery/wholefoods">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="food-grocery-menu-items">
        <Link to="/food&grocery/pantry">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default FoodGroceryMenu;
