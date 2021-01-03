import React from 'react';
import { Link } from 'react-router-dom';
import './SmartHomeMenu.scss';


function SmartHomeMenu(props) {
  return (
    <div className="smart-home-menu">
      <div className="smart-home-menu-items">
        <Link to={props.url}>{props.category0}</Link>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category1}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category2}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category3}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category4}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category5}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category6}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category7}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category8}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category9}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category10}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category11}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category12}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category13}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category14}</h2>
      </div>
      <div className="smart-home-menu-items">
        <h2>{props.category15}</h2>
      </div>
    </div>
  )
}

export default SmartHomeMenu;
