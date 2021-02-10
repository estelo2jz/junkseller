import React from 'react';
import { Link } from 'react-router-dom';
import './ComputerMenu.scss';


function ComputersMenu(props) {
  return (
    <div className="computer-menu">
      <div className="computer-menu-items">
        <Link to="/computers/tablet">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/monitors">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/accessories">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/networking">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/harddrives&storage">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/parts&components">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/software">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ComputersMenu;
