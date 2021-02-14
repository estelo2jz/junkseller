import React from 'react';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import { Link } from 'react-router-dom';
import '../BeautyHealthStyles/PremiumBeauty.scss';

function PremiumBeauty() {
  return (
    <div className="premium-beauty__container">
      <div className="premium-beauty__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/premiumbeauty</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default PremiumBeauty
