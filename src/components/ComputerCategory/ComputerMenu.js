import React from 'react';
import { Link } from 'react-router-dom';
import './ComputerMenu.scss';


function ElectronicsMenu(props) {
  return (
    <div className="computer-menu">
      <div className="computer-menu-items">
        <Link to="/computers/computertablet">
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
        <Link to="/computers/computeraccessories">
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
        <Link to="/computers/drivesstorage">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/computercomponents">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/printersink">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/software">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/officeschool">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computers/trade">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ElectronicsMenu;
