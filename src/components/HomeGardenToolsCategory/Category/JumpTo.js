import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/SubNav.scss';
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
  path11, link11,
  path12, link12,
  path13, link13,
  path14, link14,
  path15, link15,
  path16, link16,
  path17, link17,



  }) {
  return (
    <div className="home-garden-tools-sub-nav__container">    
      <div class="home-garden-tools-sub-nav__wrapper">
        <ul>
          <li>
            <div className="home-garden-tools-sub-nav__heading-flex">
              <div className="home-garden-tools-sub-nav__heading">
                <p>
                  Home, Garden & Tools
                </p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <ul className="home-garden-tools-sub-nav__ul-one">
              <Link to={path1}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link1}</li>
              </Link>
              <Link to={path2}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link2}</li>
              </Link>
              <Link to={path3}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link3}</li>
              </Link>
              <Link to={path4}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link4}</li>
              </Link>
              <Link to={path5}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link5}</li>
              </Link>
              <Link to={path6}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link6}</li>
              </Link>
              <Link to={path7}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link7}</li>
              </Link>
              <Link to={path8}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link8}</li>
              </Link>
              <Link to={path9}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link9}</li>
              </Link>
              <Link to={path10}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link10}</li>
              </Link>
              <Link to={path11}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link11}</li>
              </Link>
              <Link to={path12}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link12}</li>
              </Link>
              <Link to={path13}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link13}</li>
              </Link>
              <Link to={path14}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link14}</li>
              </Link>
              <Link to={path15}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link15}</li>
              </Link>
              <Link to={path16}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link16}</li>
              </Link>
              <Link to={path16}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link16}</li>
              </Link>
              <Link to={path17}>
                <li className="home-garden-tools-sub-nav__ul-one-li">{link17}</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JumpTo