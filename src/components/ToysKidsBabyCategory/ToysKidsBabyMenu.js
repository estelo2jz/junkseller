import React from 'react';
import { Link } from 'react-router-dom';
import './ToysKidsBabyMenu.scss';


function ToysKidsBabyMenu(props) {
  return (
    <div className="toys-kids-baby-menu">
      <div className="toys-kids-baby-menu-items">
        <Link to="/toyskidsbaby/toysgames">
          <span>
            {props.category0}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toyskidsbaby/baby">
          <span>
            {props.category1}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toyskidsbaby/diapering">
          <span>
            {props.category2}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toyskidsbaby/videogamekids">
          <span>
            {props.category3}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toyskidsbaby/family">
          <span>
            {props.category4}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toyskidsbaby/teen">
          <span>
            {props.category5}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toyskidsbaby/babyregistry">
          <span>
            {props.category6}
          </span>
        </Link>
      </div>
      <div className="toys-kids-baby-menu-items">
        <Link to="/toyskidsbaby/kidsbirthdays">
          <span>
            {props.category7}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ToysKidsBabyMenu;
