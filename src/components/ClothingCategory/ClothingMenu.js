import React from 'react';
import { NavLink } from 'react-router-dom';
import './ClothingMenu.scss';


function ElectronicsMenu(props) {
  return (
    <div className="clothing-menu">
      <div className="clothing-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/clothing/shirts&tees">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="clothing-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/clothing/pants&jeans">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="clothing-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/clothing/hoodies&sweaters">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="clothing-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/clothing/jackets">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="clothing-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/clothing/hats&beanies">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="clothing-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/clothing/backpacks">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="clothing-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/clothing/socks">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default ElectronicsMenu;
