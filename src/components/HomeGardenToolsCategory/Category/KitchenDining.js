import React from 'react';
// import '../HomeGardenStyles/KitchenDining.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function KitchenDining() {
  return (
    <div className="kitchen-dining__container">
      <p>Kitchen & Dining</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default KitchenDining
