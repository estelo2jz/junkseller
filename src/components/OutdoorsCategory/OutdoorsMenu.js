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
          className="category-one"
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
          className="category-two"
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
          className="category-three"
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
          className="category-four"
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
          className="category-five"
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
          className="category-six"
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
          className="category-seven"
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
          className="category-eight"
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
          className="category-nine"
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
