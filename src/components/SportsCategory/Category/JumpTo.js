import React from 'react';
import { Link } from 'react-router-dom';
import '../SportsStyles/SubNav.scss';

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
      <div  className="sports-sub-nav__header">
        <p>Jump To</p>
      </div>
      <div  className="sports-sub-nav__links">
        <Link to={path1}>{link1}</Link>
        <Link to={path2}>{link2}</Link>
        <Link to={path3}>{link3}</Link>
        <Link to={path4}>{link4}</Link>
        <Link to={path5}>{link5}</Link>
        <Link to={path6}>{link6}</Link>
        <Link to={path7}>{link7}</Link>
        <Link to={path8}>{link8}</Link>
      </div>
    </div>
  )
}

export default JumpTo