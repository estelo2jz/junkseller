import React from 'react';
import { Link } from 'react-router-dom';
import './OutdoorsMenu.scss';


function OutdoorsMenu(props) {
  return (
    <div className="outdoors-menu">
      <div className="outdoors-menu-items">
        <Link to="/outdoors/outdoorclothing">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdoors/camping&hiking">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdoors/climbing">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdoors/cycling">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdoors/scooters&skates&skateboards">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdoors/watersports">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdoors/wintersports">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdoors/accessories">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="outdoors-menu-items">
        <Link to="/outdoors/alloutdoor">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default OutdoorsMenu;
