import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import '../BeautyHealthStyles/MensGrooming.scss';

function MensGrooming() {
  return (
    <div className="mens-grooming__container">
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
      <ComingSoon />
    </div>
  )
}

export default MensGrooming
