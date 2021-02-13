import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/ShopRoom.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function ShopRoom() {
  return (
    <div className="shop-room__container">
      <div className="shop-room__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/shopbyroom</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default ShopRoom
