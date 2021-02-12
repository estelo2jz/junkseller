import React from 'react';
// import '../HomeGardenStyles/ShopRoom.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function ShopRoom() {
  return (
    <div className="shop-room__container">
      <p>Shop by Room</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default ShopRoom
