import React from 'react';
import { Link } from 'react-router-dom';
import './PetSuppliesMenu.scss';


function PetSuppliesMenu(props) {
  return (
    <div className="pet-supplies-menu">
      <div className="pet-supplies-menu-items">
        <Link to="/petprofiles">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/dogsupplies">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/dogfood">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/catsupplies">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/catfood">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/fishaquatic">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/smallanimals">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="pet-supplies-menu-items">
        <Link to="/birds">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PetSuppliesMenu;
