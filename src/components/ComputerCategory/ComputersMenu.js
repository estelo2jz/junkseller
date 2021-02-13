import React from 'react';
import { NavLink } from 'react-router-dom';
import './ComputerMenu.scss';


function ComputersMenu(props) {
  return (
    <div className="computer-menu">
      <div className="computer-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/computers/tablet">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="computer-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/computers/monitors">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="computer-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/computers/accessories">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="computer-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/computers/networking">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="computer-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/computers/harddrives&storage">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="computer-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/computers/parts&components">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default ComputersMenu;
