import React from 'react';
// import '../HomeGardenStyles/Discover.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function Discover() {
  return (
    <div className="discover__container">
      <p>Discover</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Discover
