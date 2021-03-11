import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
      <div class="computers-sub-nav__wrapper">
        <ul>
          <li>
            <div className="computers-sub-nav__heading">
              <ArrowDropDownIcon />
              <p>
                Computer Categories
              </p>
            </div>
            <ul className="computers-sub-nav__ul-one">
              <Link to={path1}>
                <li>{link1}</li>
              </Link>
              <Link to={path2}>
                <li>{link2}</li>
              </Link>
              <Link to={path3}>
                <li>{link3}</li>
              </Link>
              <Link to={path4}>
                <li>{link4}</li>
              </Link>
              <Link to={path5}>
                <li>{link5}</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
      {/* <div  className="computers-sub-nav__header">
        <p>Jump To</p>
      </div>
        <div className="projects">
          <button className="computers-sub-nav__btn"><ArrowDropDownIcon /><p>Computer Categories</p></button>
          <ul>
              <NavLink  to={path1}>{link1}</NavLink>
              <NavLink  to={path2}>{link2}</NavLink>
              <NavLink  to={path3}>{link3}</NavLink>
              <NavLink  to={path4}>{link4}</NavLink>
              <NavLink  to={path5}>{link5}</NavLink>
          </ul>
        </div> */}
    </div>
  )
}

export default JumpTo
