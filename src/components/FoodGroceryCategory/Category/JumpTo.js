import React from 'react';
import { Link } from 'react-router-dom';
import '../FoodGroceryStyles/SubNav.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function JumpTo({
  path1, link1,
  path2, link2,
  path3, link3,



  }) {
  return (
    <div className="food-grocery-sub-nav__container">    
      <div class="food-grocery-sub-nav__wrapper">
        <ul>
          <li>
            <div className="food-grocery-sub-nav__heading-flex">
              <Link className="food-grocery-sub-nav__back" to="/food&grocery">
                <ArrowBackIosIcon />
              </Link>
              <div className="food-grocery-sub-nav__heading">
                <p>
                  Food & Grocery
                </p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <ul className="food-grocery-sub-nav__ul-one">
              <Link to={path1}>
                <li className="food-grocery-sub-nav__ul-one-li">{link1}</li>
              </Link>
              <Link to={path2}>
                <li className="food-grocery-sub-nav__ul-one-li">{link2}</li>
              </Link>
              <Link to={path3}>
                <li className="food-grocery-sub-nav__ul-one-li">{link3}</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JumpTo