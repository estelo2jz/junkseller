import React from 'react';
import { Link } from 'react-router-dom';
import './SmartHomeMenu.scss';


function SmartHomeMenu(props) {
  return (
    <div className="smart-home-menu">
      <div className="smart-home-menu-items">
        <Link to="/smarthome/smarthome">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/smarthomelighting">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/smartlocks&entry">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/securitycameras&systems">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/plugs&outlets">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/newsmartdevices">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/heating&cooling">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/detectors&sensors">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/homeentertainment">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/pet">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/voiceassistants&hubs">
          <span>
            {props.category10}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/kitchen">
          <span>
            {props.category11}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/vacuum&mops">
          <span>
            {props.category12}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="lawn&garden">
          <span>
            {props.category13}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/wifi&networking">
          <span>
            {props.category14}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/amazonrenewed">
          <span>
            {props.category15}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SmartHomeMenu;
