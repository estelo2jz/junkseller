import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';
import '../BeautyHealthStyles/VitaminsDiet.scss';

function VitaminsDiet() {
  return (
    <div className="vitamins-diet__container">
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
      <ComingSoon />
    </div>
  )
}

export default VitaminsDiet
