import React from 'react';
import { Link } from 'react-router-dom';
import '../ElectronicStyles/SubNav.scss';
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
  path9, link9,
  path10, link10,

  }) {
  return (
    <div className="electronics-sub-nav__container">    
      <div class="electronics-sub-nav__wrapper">
        <ul>
          <li>
            <div className="electronics-sub-nav__heading-flex">
              <Link className="electronics-sub-nav__back" to="/electronics">
                <ArrowBackIosIcon />
              </Link>
              <div className="electronics-sub-nav__heading">
                <p>
                  Electronics
                </p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <ul className="electronics-sub-nav__ul-one">
              <Link to={path1}>
                <li className="electronics-sub-nav__ul-one-li">{link1}</li>
              </Link>
              <Link to={path2}>
                <li className="electronics-sub-nav__ul-one-li">{link2}</li>
              </Link>
              <Link to={path3}>
                <li className="electronics-sub-nav__ul-one-li">{link3}</li>
              </Link>
              <Link to={path4}>
                <li className="electronics-sub-nav__ul-one-li">{link4}</li>
              </Link>
              <Link to={path5}>
                <li className="electronics-sub-nav__ul-one-li">{link5}</li>
              </Link>
              <Link to={path6}>
                <li className="electronics-sub-nav__ul-one-li">{link6}</li>
              </Link>
              <Link to={path7}>
                <li className="electronics-sub-nav__ul-one-li">{link7}</li>
              </Link>
              <Link to={path8}>
                <li className="electronics-sub-nav__ul-one-li">{link8}</li>
              </Link>
              <Link to={path9}>
                <li className="electronics-sub-nav__ul-one-li">{link9}</li>
              </Link>
              <Link to={path10}>
                <li className="electronics-sub-nav__ul-one-li">{link10}</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JumpTo
