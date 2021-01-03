import React from 'react';
import { Link } from 'react-router-dom';
import './BeautyHealthMenu.scss';


function BeautyHealth(props) {
  return (
    <div className="beauty-health-menu">
      <div className="beauty-health-menu-items">
        <Link to="/homeaudiotheater">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/homeaudiotheater">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/cameraphotovideo">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/cellphones">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/headphones">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/videogames">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/bluetoothwireless">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BeautyHealth;
