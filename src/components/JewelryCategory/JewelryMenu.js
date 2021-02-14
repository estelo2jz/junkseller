import React from 'react';
import { NavLink } from 'react-router-dom';
import './JewelryMenu.scss';


function ElectronicsMenu(props) {
  return (
      <div className="jewelry-menu">
        <div className="jewelry-menu-items">
          <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            to="/handmade/jewelry/necklaces">
            <span>
              {props.category0}
            </span>
          </NavLink>
        </div>
        <div className="jewelry-menu-items">
          <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            to="/handmade/jewelry/watchs">
            <span>
              {props.category1}
            </span>
          </NavLink>
        </div>
        <div className="jewelry-menu-items">
          <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            to="/handmade/jewelry/earrings">
            <span>
              {props.category2}
            </span>
          </NavLink>
        </div>
        <div className="jewelry-menu-items">
          <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            to="/handmade/jewelry/pendants">
            <span>
              {props.category3}
            </span>
          </NavLink>
        </div>
      </div>
  )
}

export default ElectronicsMenu;
