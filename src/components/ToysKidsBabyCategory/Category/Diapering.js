import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/Diapering.scss';
import { Link } from 'react-router-dom';

function Diapering() {
  return (
  <div className="diapering__container">
    <div className="diapering__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/toys&kids&baby">
        <p>
          /toys&kids&baby
            </p>
      </Link>
      <p>/diapering</p>
    </div>
      <Building />
    </div>
  )
}

export default Diapering
