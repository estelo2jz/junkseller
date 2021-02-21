import React from 'react';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import { Link } from 'react-router-dom';
import '../BeautyHealthStyles/PremiumBeauty.scss';
import JumpTo from '../../JumpTo';

function PremiumBeauty() {
  return (
    <div className="premium-beauty__container">
      <JumpTo 
        path1 = "/beauty&health/salon&spa"
        link1 = "/salon&spa"
        path2 = "/beauty&health/health&household&baby"
        link2 = "/health&household&baby"
        path3 = "/beauty&health/mensgrooming"
        link3 = "/mensgrooming"
        path4 = "/beauty&health/skincare"
        link4 = "/skincare"
        path5 = "/beauty&health/vitamins&diet"
        link5 = "/vitamins&diet"
        path6 = "/beauty&health/allbeauty"
        link6 = "/allbeauty"
      />
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
