import React from 'react';
import { Link } from 'react-router-dom';
import './ToysKidsBabyMenu.scss';


function ToysKidsBabyMenu(props) {
  return (
    <div className="toys-kids-baby-menu">
      <div className="toys-kids-baby-menu-items">
        <Link to="/toys&kids&baby/toys&games">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toys&kids&baby/baby">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toys&kids&baby/diapering">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toys&kids&baby/videogamekids">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toys&kids&baby/family">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toys&kids&baby/teen">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toys&kids&baby/babyregistry">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toys&kids&baby/kidsbirthdays">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ToysKidsBabyMenu;
