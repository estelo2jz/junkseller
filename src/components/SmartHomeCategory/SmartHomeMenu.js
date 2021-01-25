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
        <Link to="/homeaudiotheater">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/cameraphotovideo">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/cellphones">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/headphones">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/videogames">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/bluetoothwireless">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/smarthome/detectorssensors">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/musicalinstruments">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/wearabletechnology">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/electronicsbase">
          <span>
            {props.category10}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/amazonrenewed">
          <span>
            {props.category11}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/musicalinstruments">
          <span>
            {props.category12}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/wearabletechnology">
          <span>
            {props.category13}
          </span>
        </Link>
      </div>
      <div className="smart-home-menu-items">
        <Link to="/electronicsbase">
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
