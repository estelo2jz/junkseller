import React from 'react';
import { Link } from 'react-router-dom';
import './BeautyHealthMenu.scss';


function BeautyHealth(props) {
  return (
    <div className="beauty-health-menu">
      <div className="beauty-health-menu-items">
        <Link to="/beautyhealth/allbeauty">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beautyhealth/premiumbeauty">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beautyhealth/skincare">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beautyhealth/salonspa">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beautyhealth/mensgrooming">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beautyhealth/healthhousehold">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beautyhealth/vitaminsdiet">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BeautyHealth;
