import React from 'react';
import { NavLink } from 'react-router-dom';
import './ToysKidsBabyMenu.scss';


function ToysKidsBabyMenu(props) {
  return (
    <div className="toys-kids-baby-menu">
      <div className="toys-kids-baby-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-one"
          to="/toys&kids&baby/toys&games">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="toys-kids-baby-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-two"
          to="/toys&kids&baby/baby">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="toys-kids-baby-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-three"
          to="/toys&kids&baby/diapering">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="toys-kids-baby-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-four"
          to="/toys&kids&baby/videogamekids">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="toys-kids-baby-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-five"
          to="/toys&kids&baby/family">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="toys-kids-baby-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-six"
          to="/toys&kids&baby/teen">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="toys-kids-baby-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-seven"
          to="/toys&kids&baby/babyregistry">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
      <div className="toys-kids-baby-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-eight"
          to="/toys&kids&baby/kidsbirthdays">
          <span>
            {props.category7}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default ToysKidsBabyMenu;
