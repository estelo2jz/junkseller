import React from 'react';
// import '../HomeGardenStyles/HomeDecor.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function HomeDecor() {
  return (
    <div className="home-decor__container">
      <p>Home Decor</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default HomeDecor
