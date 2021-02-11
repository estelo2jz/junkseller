import React from 'react';
import { Link } from 'react-router-dom';
import './AutomotiveMenu.scss';

function AutomotiveMenu(props) {
  return (
    <div className="automotive-menu">
      <div className="automotive-menu-items">
        <Link to="/automotive&industrial/parts&accessories">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/automotive&industrial/tools&equipment">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/automotive&industrial/carelectronics&gps">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/automotive&industrial/tires&wheels">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/automotive&industrial/motorcycle&powersports">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/automotive&industrial/rvpart&accessories">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/automotive&industrial/vehicles">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="automotive-menu-items">
        <Link to="/automotive&industrial/yourgarage">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default AutomotiveMenu;
