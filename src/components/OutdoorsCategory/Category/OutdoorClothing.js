import React from 'react';
// import '../OutdoorsStyles/OutdoorClothing.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function OutdoorClothing() {
  return (
    <div className="outdoor-clothing__container">
      <h1>Outdoor Clothing</h1>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default OutdoorClothing
