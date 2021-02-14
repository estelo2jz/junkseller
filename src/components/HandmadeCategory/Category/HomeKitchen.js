import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HomeKitchen.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function HomeKitchen() {
  return (
    <div className="home-kitchen__container">
      <div className="home-kitchen__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/home&kitchen</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default HomeKitchen
