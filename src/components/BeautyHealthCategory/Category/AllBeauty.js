import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from '../../ComingSoon';
import '../BeautyHealthStyles/AllBeauty.scss';
import Building from '../../Building';

function AllBeauty() {
  return (
    <div className="all-beauty__container">
      <div className="all-beauty__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/beauty&health">
          <p>
            /beauty&health
          </p>
        </Link>
        <p>/allbeauty</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default AllBeauty
