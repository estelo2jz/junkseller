import React from 'react';
import { NavLink } from 'react-router-dom';
import './HandmadeMenu.scss';


function HandmadeMenu(props) {
  return (
    <div className="handmade-menu">
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
         className="category-one"
         to="/handmade/allhandmade">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-two"
          to="/handmade/gifts">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-three"
          to="/handmade/jewelry">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-four"
          to="/handmade/home&kitchen">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-five"
          to="/handmade/wedding">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-six"
          to="/handmade/clothing&shoes">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-seven"
          to="/handmade/handbags&accessories">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px",
            borderRadius: "3px"
          }}
          className="category-eight"
          to="/handmade/beauty&grooming">
          <span>
            {props.category7}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-nine"
          to="/handmade/stationary&partysupplies">
          <span>
            {props.category8}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-ten"
          to="/handmade/toys&games">
          <span>
            {props.category9}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-eleven"
          to="/handmade/petsupplies">
          <span>
            {props.category10}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-twelve"
          to="/handmade/homedecor">
          <span>
            {props.category11}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-thirteen"
          to="/handmade/artwork">
          <span>
            {props.category12}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-fourteen"
          to="/handmade/kitchen&dining">
          <span>
            {props.category13}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-fiftteen"
          to="/handmade/furniture">
          <span>
            {props.category14}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-sixthteen"
          to="/handmade/baby">
          <span>
            {props.category15}
          </span>
        </NavLink>
      </div>
      <div className="handmade-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            borderRadius: "3px"
          }}
          className="category-seventeen"
          to="/handmade/sellon">
          <span>
            {props.category16}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default HandmadeMenu;
