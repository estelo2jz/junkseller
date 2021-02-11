import React from 'react';
import { Link } from 'react-router-dom';
import './BeautyHealthMenu.scss';


function BeautyHealth(props) {
  return (
    <div className="beauty-health-menu">
      <div className="beauty-health-menu-items">
        <Link to="/beauty&health/allbeauty">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beauty&health/premiumbeauty">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beauty&health/skincare">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beauty&health/salon&spa">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beauty&health/mensgrooming">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beauty&health/health&household&baby">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="beauty-health-menu-items">
        <Link to="/beauty&health/vitamins&diet">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BeautyHealth;
