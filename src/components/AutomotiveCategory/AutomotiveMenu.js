import React from 'react';
import { Link } from 'react-router-dom';
import './AutomotiveMenu.scss';

function AutomotiveMenu(props) {
  return (
    <div className="automotive-menu">
      <div className="automotive-menu-items">
        <Link to="/tvvideo">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/homeaudiotheater">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/cameraphotovideo">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/cellphones">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/headphones">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/videogames">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/bluetoothwireless">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/carelectronics">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default AutomotiveMenu;
