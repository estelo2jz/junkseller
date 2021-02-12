import React from 'react';
// import '../HomeGardenStyles/Appliances.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function Appliances() {
  return (
    <div className="appliances__container">
      <p>Appliances</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Appliances
