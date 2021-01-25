import React from 'react';
import { Link } from 'react-router-dom';
import './SportsMenu.scss';


function SportsMenu(props) {
  return (
    <div className="sports-menu">
      <div className="sports-menu-items">
        <Link to="/sports/athleticclothing">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="sports-menu-items">
        <Link to="/sports/exercise&fitness">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="sports-menu-items">
        <Link to="/sports/hunting&fishing">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="sports-menu-items">
        <Link to="/sports/golf">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="sports-menu-items">
        <Link to="/sports/fanshop">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="sports-menu-items">
        <Link to="/sports/leisure&game">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="sports-menu-items">
        <Link to="/sports/sports&collectibles">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="sports-menu-items">
        <Link to="/sports/allsports&fitness">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
      <div className="sports-menu-items">
        <Link to="/sports/newgearinnovations">
          <span>
            {props.category8}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SportsMenu;
