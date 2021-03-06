import React from 'react';
import { Link } from 'react-router-dom';
import '../SportsStyles/SubNav.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function JumpTo({
  path1, link1,
  path2, link2,
  path3, link3,
  path4, link4,
  path5, link5,
  path6, link6,
  path7, link7,
  path8, link8,


  }) {
  return (
    <div className="sports-sub-nav__container">    
      <div class="sports-sub-nav__wrapper">
        <ul>
          <li>
            <div className="sports-sub-nav__heading-flex">
              <div className="sports-sub-nav__heading">
                <p>
                  Sports
                </p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <ul className="sports-sub-nav__ul-one">
              <Link to={path1}>
                <li className="sports-sub-nav__ul-one-li">{link1}</li>
              </Link>
              <Link to={path2}>
                <li className="sports-sub-nav__ul-one-li">{link2}</li>
              </Link>
              <Link to={path3}>
                <li className="sports-sub-nav__ul-one-li">{link3}</li>
              </Link>
              <Link to={path4}>
                <li className="sports-sub-nav__ul-one-li">{link4}</li>
              </Link>
              <Link to={path5}>
                <li className="sports-sub-nav__ul-one-li">{link5}</li>
              </Link>
              <Link to={path6}>
                <li className="sports-sub-nav__ul-one-li">{link6}</li>
              </Link>
              <Link to={path7}>
                <li className="sports-sub-nav__ul-one-li">{link7}</li>
              </Link>
              <Link to={path8}>
                <li className="sports-sub-nav__ul-one-li">{link8}</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JumpTo