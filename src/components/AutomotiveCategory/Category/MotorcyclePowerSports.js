import React from 'react';
import '../AutomotiveStyles/MotorcyclePowerSports.scss';
import { Link } from 'react-router-dom';
import Building from '../../Building';

function MotorcyclePowerSports() {
  return (
  <div className="motorcycles-powersports__container">
    <div className="motorcycles-powersports__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/motorcycles&powersports</p>
    </div>
      <Building />
    </div>
  )
}

export default MotorcyclePowerSports
