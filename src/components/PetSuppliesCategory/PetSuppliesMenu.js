import React from 'react';
import { Link } from 'react-router-dom';
import './PetSuppliesMenu.scss';


function PetSuppliesMenu(props) {
  return (
    <div className="pet-supplies-menu">
      <div className="pet-supplies-menu-items">
        <Link to="/pet&supplies/petprofiles">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/pet&supplies/dogsupplies">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/pet&supplies/dogfood">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/pet&supplies/catsupplies">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/pet&supplies/catfood">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/pet&supplies/fish&aquatic">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/pet&supplies/smallanimals">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/pet&supplies/birds">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PetSuppliesMenu;
