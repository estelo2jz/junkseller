import React from 'react';
import { Link } from 'react-router-dom';
import './OutdoorsMenu.scss';


function OutdoorsMenu(props) {
  return (
    <div className="outdoors-menu">
      <div className="outdoors-menu-items">
        <Link to="/outdoorclothing">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/campinghiking">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/climbing">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/cycling">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/skates">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/watersports">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/wintersports">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdooraccessories">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/alloutdoor">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default OutdoorsMenu;
