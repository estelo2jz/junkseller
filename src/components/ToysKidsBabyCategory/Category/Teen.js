import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/Teen.scss';
import { Link } from 'react-router-dom';

function Teen() {
  return (
  <div className="teen__container">
    <div className="teen__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/toys&kids&baby">
        <p>
          /toys&kids&baby
            </p>
      </Link>
      <p>/teen</p>
    </div>
      <Building />
    </div>
  )
}

export default Teen
