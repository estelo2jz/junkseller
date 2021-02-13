import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/BeautyGrooming.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function BeautyGrooming() {
  return (
    <div className="beauty-grooming__container">
      <div className="beauty-grooming__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/beauty&grooming</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default BeautyGrooming
