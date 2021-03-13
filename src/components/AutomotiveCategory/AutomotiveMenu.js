import React from 'react';
import { NavLink } from 'react-router-dom';
import './AutomotiveMenu.scss';

function AutomotiveMenu(props) {
  return (
    <div className="automotive-menu">
      <div className="automotive-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-one"
          to="/automotive&industrial/parts&accessories">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="automotive-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-two"
          to="/automotive&industrial/tools&equipment">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="automotive-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-three"
          to="/automotive&industrial/carelectronics&gps">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="automotive-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-four"
          to="/automotive&industrial/tires&wheels">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="automotive-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-five"
          to="/automotive&industrial/motorcycle&powersports">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="automotive-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-six"
          to="/automotive&industrial/rvpart&accessories">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="automotive-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-seven"
          to="/automotive&industrial/vehicles">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
      <div className="automotive-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-eight"
          to="/automotive&industrial/yourgarage">
          <span>
            {props.category7}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default AutomotiveMenu;
