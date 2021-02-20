import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/Family.scss';
import { Link } from 'react-router-dom';

function Family() {
  return (
  <div className="family__container">
    <div className="family__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/toys&kids&baby">
        <p>
          /toys&kids&baby
            </p>
      </Link>
      <p>/family</p>
    </div>
      <Building />
    </div>
  )
}

export default Family
