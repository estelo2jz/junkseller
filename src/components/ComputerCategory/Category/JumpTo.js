import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../ComputerStyles/PartsNavBar.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
            <div className="computers-sub-nav__heading-flex">
              <Link className="computers-sub-nav__back" to="/computers">
                <ArrowBackIosIcon />
              </Link>
              <div className="computers-sub-nav__heading">
                <p>
                  Computer
                </p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <ul className="computers-sub-nav__ul-one">
              <Link to={path1}>
                <li className="computers-sub-nav__ul-one-li">{link1}</li>
              </Link>
              <Link to={path2}>
                <li className="computers-sub-nav__ul-one-li">{link2}</li>
              </Link>
              <Link to={path3}>
                <li className="computers-sub-nav__ul-one-li">{link3}</li>
              </Link>
              <Link to={path4}>
                <li className="computers-sub-nav__ul-one-li">{link4}</li>
              </Link>
              <Link to={path5}>
                <li className="computers-sub-nav__ul-one-li">{link5}</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JumpTo
