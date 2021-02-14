import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/SellOn.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function SellOn() {
  return (
    <div className="sell-on__container">
      <div className="sell-on__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/sellon</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default SellOn
