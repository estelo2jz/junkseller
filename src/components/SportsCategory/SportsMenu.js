import React from 'react';
import { NavLink } from 'react-router-dom';
import './SportsMenu.scss';


function SportsMenu(props) {
  return (
    <div className="sports-menu">
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/athleticclothing">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/exercise&fitness">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/hunting&fishing">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/golf">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/fanshop">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/leisure&game">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/sports&collectibles">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/allsports&fitness">
          <span>
            {props.category7}
          </span>
        </NavLink>
      </div>
      <div className="sports-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/sports/newgearinnovations">
          <span>
            {props.category8}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default SportsMenu;
