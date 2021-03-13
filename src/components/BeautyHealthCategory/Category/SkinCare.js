import React from 'react';
import { Link } from 'react-router-dom';
import Building from '../../Building';
import '../BeautyHealthStyles/SkinCare.scss';
import JumpTo from './JumpTo';

function SkinCare() {
  return (
    <div className="skin-care__container">
      <JumpTo 
        path1 = "/beauty&health/salon&spa"
        link1 = "salon&spa"
        path2 = "/beauty&health/health&household&baby"
        link2 = "health&household&baby"
        path3 = "/beauty&health/mensgrooming"
        link3 = "mens-grooming"
        path4 = "/beauty&health/allbeauty"
        link4 = "all-beauty"
        path5 = "/beauty&health/vitamins&diet"
        link5 = "vitamins&diet"
        path6 = "/beauty&health/premiumbeauty"
        link6 = "premium-beauty"
      />
      <div className="skin-care__history-path">
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

export default SkinCare
