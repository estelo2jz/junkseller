import React from 'react';
import { Link } from 'react-router-dom';
import './PetSuppliesMenu.scss';


function PetSuppliesMenu(props) {
  return (
    <div className="pet-supplies-menu">
      <div className="pet-supplies-menu-items">
        <Link to={props.url}>{props.category0}</Link>
      </div>
      <div className="pet-supplies-menu-items">
        <h2>{props.category1}</h2>
      </div>
      <div className="pet-supplies-menu-items">
        <h2>{props.category2}</h2>
      </div>
      <div className="pet-supplies-menu-items">
        <h2>{props.category3}</h2>
      </div>
      <div className="pet-supplies-menu-items">
        <h2>{props.category4}</h2>
      </div>
      <div className="pet-supplies-menu-items">
        <h2>{props.category5}</h2>
      </div>
      <div className="pet-supplies-menu-items">
        <h2>{props.category6}</h2>
      </div>
      <div className="pet-supplies-menu-items">
        <h2>{props.category7}</h2>
      </div>
    </div>
  )
}

export default PetSuppliesMenu;
