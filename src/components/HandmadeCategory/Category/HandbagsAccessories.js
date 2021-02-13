import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HandbagAccessories.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function HandbagsAccessories() {
  return (
    <div className="handbag-accessories__container">
      <div className="handbag-accessories__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/handbagaccessories</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default HandbagsAccessories
