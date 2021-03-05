import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/SubNav.scss';

function JumpTo({
  path1, link1,
  path2, link2,
  path3, link3,



  }) {
  return (
    <div>
      <div  className="food-grocery-sub-nav__header">
        <p>Jump To</p>
      </div>
      <div className="food-grocery-sub-nav__container">
        <div  className="food-grocery-sub-nav__links">
          <div className="food-grocery-sub-nav__top">
            <Link to={path1}>{link1}</Link>
            <Link to={path2}>{link2}</Link>
            <Link to={path3}>{link3}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JumpTo