import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/CarElectronics.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function CarElectronics() {
  return (
  <div className="car-electronics__container">
    <div className="car-electronics__jump-to">
        <JumpTo 
          path1 = "/automotive&industrial/parts&accessories"
          link1 = "parts&accessories"
          path2 = "/automotive&industrial/tools&equipment"
          link2 = "tools&equipment"
          path3 = "/automotive&industrial/tires&wheels"
          link3 = "tires&wheels"
          path4 = "/automotive&industrial/motorcycle&powersports"
          link4 = "motorcycle&powersports"
          path5 = "/automotive&industrial/rvpart&accessories"
          link5 = "rv-part&accessories"
          path6 = "/automotive&industrial/vehicles"
          link6 = "vehicles"
          path7 = "/automotive&industrial/yourgarage"
          link7 = "your-garage"
        />
    </div>
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
