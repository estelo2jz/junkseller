import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/SubNav.scss';

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



  }) {
  return (
    <div>
      <div  className="handmade-sub-nav__header">
        <p>Jump To</p>
      </div>
      <div className="handmade-sub-nav__container">
        <div  className="handmade-sub-nav__links">
          <div className="handmade-sub-nav__top">
            <Link to={path1}>{link1}</Link>
            <Link to={path2}>{link2}</Link>
            <Link to={path3}>{link3}</Link>
            <Link to={path4}>{link4}</Link>
            <Link to={path5}>{link5}</Link>
            <Link to={path6}>{link6}</Link>
            <Link to={path7}>{link7}</Link>
            <Link to={path8}>{link8}</Link>
          </div>
          <div className="handmade-sub-nav__bottom">
            <Link to={path9}>{link9}</Link>
            <Link to={path10}>{link10}</Link>
            <Link to={path11}>{link11}</Link>
            <Link to={path12}>{link12}</Link>
            <Link to={path13}>{link13}</Link>
            <Link to={path14}>{link14}</Link>
            <Link to={path15}>{link15}</Link>
            <Link to={path16}>{link16}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JumpTo