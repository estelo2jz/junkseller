import React from 'react';
import { Link } from 'react-router-dom';
import '../ElectronicStyles/SubNav.scss';

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
    <div>
      <div  className="electronics-sub-nav__header">
        <p>Jump To</p>
      </div>
      <div className="electronics-sub-nav__container">
        <div  className="electronics-sub-nav__links">
          <div className="electronics-sub-nav__top">
            <Link to={path1}>{link1}</Link>
            <Link to={path2}>{link2}</Link>
            <Link to={path3}>{link3}</Link>
            <Link to={path4}>{link4}</Link>
            <Link to={path5}>{link5}</Link>
          </div>
          <div className="electronics-sub-nav__bottom">
            <Link to={path6}>{link6}</Link>
            <Link to={path7}>{link7}</Link>
            <Link to={path8}>{link8}</Link>
            <Link to={path9}>{link9}</Link>
            <Link to={path10}>{link10}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JumpTo
