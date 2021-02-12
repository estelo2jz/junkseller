import React from 'react';
// import '../HomeGardenStyles/GardenOutdoor.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function GardenOutdoor() {
  return (
    <div className="garden-outdoor__container">
      <p>Garden & Outdoor</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default GardenOutdoor
