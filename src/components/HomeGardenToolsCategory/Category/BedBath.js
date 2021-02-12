import React from 'react';
// import '../HomeGardenStyles/BedBath.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function BedBath() {
  return (
    <div className="bed-bath__container">
      <p>Bed & Bath</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default BedBath
