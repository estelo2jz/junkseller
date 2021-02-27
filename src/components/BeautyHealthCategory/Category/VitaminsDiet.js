import React from 'react';
import { Link } from 'react-router-dom';
import Building from '../../Building';
import '../BeautyHealthStyles/VitaminsDiet.scss';
import JumpTo from './JumpTo';

function VitaminsDiet() {
  return (
    <div className="vitamins-diet__container">
      <JumpTo 
        path1 = "/beauty&health/salon&spa"
        link1 = "salon&spa"
        path2 = "/beauty&health/health&household&baby"
        link2 = "health&household&baby"
        path3 = "/beauty&health/mensgrooming"
        link3 = "mens-grooming"
        path4 = "/beauty&health/skincare"
        link4 = "skin-care"
        path5 = "/beauty&health/allbeauty"
        link5 = "all-beauty"
        path6 = "/beauty&health/premiumbeauty"
        link6 = "premium-beauty"
      />
      <div className="vitamins-diet__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/vitamins&diet</p>
      </div>
      <Building />
    </div>
  )
}

export default VitaminsDiet
