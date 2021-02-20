import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/RV.scss';
import { Link } from 'react-router-dom';

function RV() {
  return (
  <div className="rv__container">
    <div className="rv__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/rv-parts&accessories</p>
    </div>
      <Building />
    </div>
  )
}

export default RV
