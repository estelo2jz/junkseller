import React from 'react';
import { Link } from 'react-router-dom';
import './ToysKidsBabyMenu.scss';


function ToysKidsBabyMenu(props) {
  return (
    <div className="toys-kids-baby-menu">
      <div className="toys-kids-baby-menu-items">
        <Link to={props.url}>{props.category0}</Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category1}</h2>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category2}</h2>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category3}</h2>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category4}</h2>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category5}</h2>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category6}</h2>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category7}</h2>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category8}</h2>
      </div>
      <div className="toys-kids-baby-menu-items">
        <h2>{props.category9}</h2>
      </div>
    </div>
  )
}

export default ToysKidsBabyMenu;
