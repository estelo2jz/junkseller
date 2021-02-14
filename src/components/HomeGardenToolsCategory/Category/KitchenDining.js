import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/KitchenDining.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function KitchenDining() {
  return (
    <div className="kitchen-dining__container">
      <div className="kitchen-dining__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/kitchen&dining</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default KitchenDining
