import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/StationaryParty.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function StationaryParty() {
  return (
    <div className="stationary-party__container">
      <div className="stationary-party__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/stationary&partysupplies</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default StationaryParty
