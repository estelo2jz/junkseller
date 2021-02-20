import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/Vehicles.scss';
import { Link } from 'react-router-dom';

function Vehicles() {
  return (
  <div className="vehicles__container">
    <div className="vehicles__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/vehicles</p>
    </div>
      <Building />
    </div>
  )
}

export default Vehicles
