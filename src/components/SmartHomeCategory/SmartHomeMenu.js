import React from 'react';
import { NavLink } from 'react-router-dom';
import './SmartHomeMenu.scss';


function SmartHomeMenu(props) {
  return (
    <div className="smart-home-menu">
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-one"
          to="/smarthome/smarthome">
          <span>
            {props.category0}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-two"
          to="/smarthome/smarthomelighting">
          <span>
            {props.category1}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-three"
          to="/smarthome/smartlocks&entry">
          <span>
            {props.category2}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-four"
          to="/smarthome/securitycameras&systems">
          <span>
            {props.category3}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-five"
          to="/smarthome/plugs&outlets">
          <span>
            {props.category4}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-six"
          to="/smarthome/newsmartdevices">
          <span>
            {props.category5}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-seven"
          to="/smarthome/heating&cooling">
          <span>
            {props.category6}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-eight"
          to="/smarthome/detectors&sensors">
          <span>
            {props.category7}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-nine"
          to="/smarthome/homeentertainment">
          <span>
            {props.category8}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-ten"
          to="/smarthome/pet">
          <span>
            {props.category9}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-eleven"
          to="/smarthome/voiceassistants&hubs">
          <span>
            {props.category10}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-twelve"
          to="/smarthome/kitchen">
          <span>
            {props.category11}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-thirteen"
          to="/smarthome/vacuum&mops">
          <span>
            {props.category12}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-fourteen"
          to="/smarthome/lawn&garden">
          <span>
            {props.category13}
          </span>
        </NavLink>
      </div>
      <div className="smart-home-menu-items">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px"
          }}
         className="category-fiftteen"
          to="/smarthome/wifi&networking">
          <span>
            {props.category14}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default SmartHomeMenu;
