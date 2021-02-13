import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import '../BeautyHealthStyles/HealthHousehold.scss';

function HealthHousehold() {
  return (
    <div className="health-household__container">
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
      <ComingSoon />
    </div>
  )
}

export default HealthHousehold
