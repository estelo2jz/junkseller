import React from 'react';
import { Link } from 'react-router-dom';
import './ComputerMenu.scss';


function ElectronicsMenu(props) {
  return (
    <div className="computer-menu">
      <div className="computer-menu-items">
        <Link to="/computertablet">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/monitors">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computeraccessories">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/networking">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/drivesstorage">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/computercomponents">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/printersink">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/software">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/officeschool">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
      <div className="computer-menu-items">
        <Link to="/trade">
          <span>
            {props.category9}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ElectronicsMenu;
