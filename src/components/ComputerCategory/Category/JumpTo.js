import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../ComputerStyles/PartsNavBar.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function JumpTo({
  path1, link1,
  path2, link2,
  path3, link3,
  path4, link4,
  path5, link5,
  }) {
  return (
    <div className="computers-sub-nav__container">
      {/* <div  className="computers-sub-nav__header">
        <p>Jump To</p>
      </div> */}
      <div className="computers-sub-nav__outer">
        <div class="projects">
          <button className="computers-sub-nav__btn"><ArrowDropDownIcon /><p>Computer Categories</p></button>
          <ul>
              <NavLink  to={path1}>{link1}</NavLink>
              <NavLink  to={path2}>{link2}</NavLink>
              <NavLink  to={path3}>{link3}</NavLink>
              <NavLink  to={path4}>{link4}</NavLink>
              <NavLink  to={path5}>{link5}</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JumpTo
