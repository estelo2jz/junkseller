import React from 'react';
import { NavLink } from 'react-router-dom';
import './BeautyHealthMenu.scss';


function BeautyHealth(props) {
  return (
    <div className="beauty-health-menu">
      <div className="beauty-health-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/beauty&health/allbeauty">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="beauty-health-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/beauty&health/premiumbeauty">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="beauty-health-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/beauty&health/skincare">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="beauty-health-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/beauty&health/salon&spa">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="beauty-health-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/beauty&health/mensgrooming">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="beauty-health-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/beauty&health/health&household&baby">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="beauty-health-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/beauty&health/vitamins&diet">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default BeautyHealth;
