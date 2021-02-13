import React from 'react';
import { NavLink } from 'react-router-dom';
import './ElectronicsMenu.scss';
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

function ElectronicsMenu(props) {
  return (
      <div className="electronics-menu">
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-one" to="/electronics/tvvideo">
            <label>
              {props.category0}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-two" to="/electronics/homeaudiotheater">
          <label>
            {props.category1}
          </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-three" to="/electronics/cameraphotovideo">
            <label>
              {props.category2}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-four" to="/electronics/cellphones">
            <label>
              {props.category3}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-five" to="/electronics/headphones">
            <label>
              {props.category4}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-six" to="/electronics/videogames">
            <label>
              {props.category5}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-seven" to="/electronics/bluetoothwireless">
            <label>
              {props.category6}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-eight" to="/electronics/carelectronics">
            <label>
              {props.category7}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-nine" to="/electronics/musicalinstruments">
            <label>
              {props.category8}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-ten" to="/electronics/wearabletechnology">
            <label>
              {props.category9}
            </label>
          </NavLink>
        </div>
        <div className="electronics-menu-items">
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
            className="category-eleven" to="/electronics/electronicsbase">
            <label>
              {props.category10}
            </label>
          </NavLink>
        </div>
      </div>
  )
}

export default ElectronicsMenu;
