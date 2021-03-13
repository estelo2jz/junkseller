import React from 'react';
import Building from '../../Building';
import { Link } from 'react-router-dom';
import '../BeautyHealthStyles/PremiumBeauty.scss';
import JumpTo from './JumpTo';

function PremiumBeauty() {
  return (
    <div className="premium-beauty__container">
      <JumpTo 
        path1 = "/beauty&health/salon&spa"
        link1 = "salon&spa"
        path2 = "/beauty&health/health&household&baby"
        link2 = "health&household&baby"
        path3 = "/beauty&health/mensgrooming"
        link3 = "mens-grooming"
        path4 = "/beauty&health/skincare"
        link4 = "skin-care"
        path5 = "/beauty&health/vitamins&diet"
        link5 = "vitamins&diet"
        path6 = "/beauty&health/allbeauty"
        link6 = "all-beauty"
      />
      <div className="premium-beauty__history-path">
        <Link to="/beauty&health">
          <p>
            go back
          </p>
        </Link>
      </div>
      <Building />
    </div>
  )
}

export default PremiumBeauty
