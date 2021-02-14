import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/HomeDecor.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function HomeDecor() {
  return (
    <div className="home-decor__container">
      <div className="home-decor__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/homedecor</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default HomeDecor
