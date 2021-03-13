import React from 'react';
import { NavLink } from 'react-router-dom';
import './PetSuppliesMenu.scss';


function PetSuppliesMenu(props) {
  return (
    <div className="pet-supplies-menu">
      <div className="pet-supplies-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-one"
          to="/pet&supplies/petprofiles">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="pet-supplies-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-two"
          to="/pet&supplies/dogsupplies">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="pet-supplies-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-three"
          to="/pet&supplies/dogfood">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="pet-supplies-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-four"
          to="/pet&supplies/catsupplies">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="pet-supplies-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-five"
          to="/pet&supplies/catfood">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="pet-supplies-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-six"
          to="/pet&supplies/fish&aquatic">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="pet-supplies-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-seven"
          to="/pet&supplies/smallanimals">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
      <div className="pet-supplies-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
          className="category-eight"
          to="/pet&supplies/birds">
          <span>
            {props.category7}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default PetSuppliesMenu;
