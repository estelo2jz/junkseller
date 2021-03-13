import React from 'react';
import { Link } from 'react-router-dom';
import '../PetSuppliesStyles/SubNav.scss';
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
  }) {
  return (
    <div className="pet-supplies-sub-nav__container">    
      <div class="pet-supplies-sub-nav__wrapper">
        <ul>
          <li>
            <div className="pet-supplies-sub-nav__heading-flex">
              <div className="pet-supplies-sub-nav__heading">
                <p>
                  Pet & Supplies
                </p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <ul className="pet-supplies-sub-nav__ul-one">
              <Link to={path1}>
                <li className="pet-supplies-sub-nav__ul-one-li">{link1}</li>
              </Link>
              <Link to={path2}>
                <li className="pet-supplies-sub-nav__ul-one-li">{link2}</li>
              </Link>
              <Link to={path3}>
                <li className="pet-supplies-sub-nav__ul-one-li">{link3}</li>
              </Link>
              <Link to={path4}>
                <li className="pet-supplies-sub-nav__ul-one-li">{link4}</li>
              </Link>
              <Link to={path5}>
                <li className="pet-supplies-sub-nav__ul-one-li">{link5}</li>
              </Link>
              <Link to={path6}>
                <li className="pet-supplies-sub-nav__ul-one-li">{link6}</li>
              </Link>
              <Link to={path7}>
                <li className="pet-supplies-sub-nav__ul-one-li">{link7}</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JumpTo