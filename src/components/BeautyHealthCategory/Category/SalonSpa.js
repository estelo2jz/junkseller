import React from 'react';
import { Link } from 'react-router-dom';
import Building from '../../Building';
import '../BeautyHealthStyles/SalonSpa.scss';
import JumpTo from './JumpTo';

function SalonSpa() {
  return (
    <div className="salon-spa__container">
      <JumpTo 
        path1 = "/beauty&health/allbeauty"
        link1 = "allbeauty"
        path2 = "/beauty&health/health&household&baby"
        link2 = "health&household&baby"
        path3 = "/beauty&health/mensgrooming"
        link3 = "mens-grooming"
        path4 = "/beauty&health/skincare"
        link4 = "skin-care"
        path5 = "/beauty&health/vitamins&diet"
        link5 = "vitamins&diet"
        path6 = "/beauty&health/premiumbeauty"
        link6 = "premium-beauty"
      />
      <div className="salon-spa__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/salon&spa</p>
      </div>
      <Building />
    </div>
  )
}

export default SalonSpa
