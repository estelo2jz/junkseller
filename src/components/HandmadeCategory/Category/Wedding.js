import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Wedding.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function Wedding() {
  return (
    <div className="wedding__container">
      <div className="wedding__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/wedding</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default Wedding
