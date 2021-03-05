import React from 'react';
import { Link } from 'react-router-dom';
import '../ComputerStyles/PartsNavBar.scss';

function JumpTo({
  path1, link1,
  path2, link2,
  path3, link3,
  path4, link4,
  path5, link5,



  }) {
  return (
    <div>
      <div  className="computers-sub-nav__header">
        <p>Jump To</p>
      </div>
      <div className="computers-sub-nav__container">
        <div  className="computers-sub-nav__links">
          <div className="computers-sub-nav__top">
            <Link to={path1}>{link1}</Link>
            <Link to={path2}>{link2}</Link>
            <Link to={path3}>{link3}</Link>
          </div>
          <div className="computers-sub-nav__bottom">
            <Link to={path4}>{link4}</Link>
            <Link to={path5}>{link5}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JumpTo
