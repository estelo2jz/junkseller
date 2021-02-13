import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Gifts.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function Gifts() {
  return (
    <div className="gifts__container">
      <div className="gifts__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/gifts</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Gifts
