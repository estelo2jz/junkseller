import React from 'react';
import { Link } from 'react-router-dom';
import Building from '../../Building';
import '../BeautyHealthStyles/SkinCare.scss';
import JumpTo from '../../JumpTo';

function SkinCare() {
  return (
    <div className="skin-care__container">
      <JumpTo 
        path1 = "/beauty&health/salon&spa"
        link1 = "/salon&spa"
        path2 = "/beauty&health/health&household&baby"
        link2 = "/health&household&baby"
        path3 = "/beauty&health/mensgrooming"
        link3 = "/mensgrooming"
        path4 = "/beauty&health/allbeauty"
        link4 = "/allbeauty"
        path5 = "/beauty&health/vitamins&diet"
        link5 = "/vitamins&diet"
        path6 = "/beauty&health/premiumbeauty"
        link6 = "/premiumbeauty"
      />
      <div className="skin-care__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/skincare</p>
      </div>
      <Building />
    </div>
  )
}

export default SkinCare
