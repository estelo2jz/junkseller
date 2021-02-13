import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Furniture.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function Furniture() {
  return (
    <div className="furniture__container">
      <div className="furniture__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/furniture</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Furniture
