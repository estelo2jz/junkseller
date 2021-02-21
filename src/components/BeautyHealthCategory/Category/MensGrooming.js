import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import '../BeautyHealthStyles/MensGrooming.scss';
import JumpTo from '../../JumpTo';

function MensGrooming() {
  return (
    <div className="mens-grooming__container">
      <JumpTo 
        path1 = "/beauty&health/salon&spa"
        link1 = "/salon&spa"
        path2 = "/beauty&health/health&household&baby"
        link2 = "/health&household&baby"
        path3 = "/beauty&health/allbeauty"
        link3 = "/allbeauty"
        path4 = "/beauty&health/skincare"
        link4 = "/skincare"
        path5 = "/beauty&health/vitamins&diet"
        link5 = "/vitamins&diet"
        path6 = "/beauty&health/premiumbeauty"
        link6 = "/premiumbeauty"
      />
      <div className="mens-grooming__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/mensgrooming</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default MensGrooming
