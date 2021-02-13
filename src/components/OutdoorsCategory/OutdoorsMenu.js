import React from 'react';
import { NavLink } from 'react-router-dom';
import './OutdoorsMenu.scss';


function OutdoorsMenu(props) {
  return (
    <div className="outdoors-menu">
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/outdoorclothing">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/camping&hiking">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/climbing">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/cycling">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/scooters&skates&skateboards">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/watersports">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/wintersports">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/accessories">
          <span>
            {props.category7}
          </span>
        </NavLink>
      </div>
      <div className="outdoors-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          to="/outdoors/alloutdoor">
          <span>
            {props.category8}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default OutdoorsMenu;
