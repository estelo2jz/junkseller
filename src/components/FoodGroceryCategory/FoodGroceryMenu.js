import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodGroceryMenu.scss';


function FoodGroceryMenu(props) {
  return (
    <div className="food-grocery-menu">
      <div className="food-grocery-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/food&grocery/grocery&gourmet">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="food-grocery-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/food&grocery/fresh">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="food-grocery-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/food&grocery/wholefoods">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="food-grocery-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/food&grocery/pantry">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default FoodGroceryMenu;
