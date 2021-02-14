import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/KitchenDining.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function KitchenDining() {
  return (
    <div className="kitchenDining__container">
      <div className="kitchenDining__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
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
