import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/Baby.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function Baby() {
  return (
    <div className="baby__container">
      <div className="baby__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/baby</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default Baby
