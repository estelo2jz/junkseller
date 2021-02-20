import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/CarElectronics.scss';
import { Link } from 'react-router-dom';

function CarElectronics() {
  return (
  <div className="car-electronics__container">
    <div className="car-electronics__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/car-vehicle-electronics&gps</p>
    </div>
      <Building />
    </div>
  )
}

export default CarElectronics
