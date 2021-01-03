import React from 'react';
import { Link } from 'react-router-dom';
import './FoodGroceryMenu.scss';


function FoodGroceryMenu(props) {
  return (
    <div className="food-grocery-menu">
      <div className="food-grocery-menu-items">
        <Link to={props.url}>{props.category0}</Link>
      </div>
      <div className="food-grocery-menu-items">
        <h2>{props.category1}</h2>
      </div>
      <div className="food-grocery-menu-items">
        <h2>{props.category2}</h2>
      </div>
      <div className="food-grocery-menu-items">
        <h2>{props.category3}</h2>
      </div>
      <div className="food-grocery-menu-items">
        <h2>{props.category4}</h2>
      </div>
      <div className="food-grocery-menu-items">
        <h2>{props.category5}</h2>
      </div>
      <div className="food-grocery-menu-items">
        <h2>{props.category6}</h2>
      </div>
      <div className="food-grocery-menu-items">
        <h2>{props.category7}</h2>
      </div>
    </div>
  )
}

export default FoodGroceryMenu;
