import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import '../BeautyHealthStyles/SkinCare.scss';

function SkinCare() {
  return (
    <div className="skin-care__container">
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
      {/* <ComingSoon /> */}
    </div>
  )
}

export default SkinCare
