import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import '../BeautyHealthStyles/HealthHousehold.scss';
import JumpTo from '../../JumpTo';

function HealthHousehold() {
  return (
    <div className="health-household__container">
      <JumpTo 
        path1 = "/beauty&health/salon&spa"
        link1 = "/salon&spa"
        path2 = "/beauty&health/allbeauty"
        link2 = "/allbeauty"
        path3 = "/beauty&health/mensgrooming"
        link3 = "/mensgrooming"
        path4 = "/beauty&health/skincare"
        link4 = "/skincare"
        path5 = "/beauty&health/vitamins&diet"
        link5 = "/vitamins&diet"
        path6 = "/beauty&health/premiumbeauty"
        link6 = "/premiumbeauty"
      />
      <div className="health-household__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/health&household&baby</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default HealthHousehold
