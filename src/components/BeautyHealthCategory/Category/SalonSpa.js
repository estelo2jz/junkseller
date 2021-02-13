import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import '../BeautyHealthStyles/SalonSpa.scss';

function SalonSpa() {
  return (
    <div className="salon-spa__container">
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
      <ComingSoon />
    </div>
  )
}

export default SalonSpa
