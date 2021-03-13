import React from 'react';
import '../AutomotiveStyles/MotorcyclePowerSports.scss';
import { Link } from 'react-router-dom';
import Building from '../../Building';
import JumpTo from './JumpTo';

function MotorcyclePowerSports() {
  return (
  <div className="motorcycles-powersports__container">
          <JumpTo 
          path1 = "/automotive&industrial/parts&accessories"
          link1 = "parts&accessories"
          path2 = "/automotive&industrial/tools&equipment"
          link2 = "tools&equipment"
          path3 = "/automotive&industrial/tires&wheels"
          link3 = "tires&wheels"
          path4 = "/automotive&industrial/carelectronics&gps"
          link4 = "car-electronics&gps"
          path5 = "/automotive&industrial/rvpart&accessories"
          link5 = "rv-part&accessories"
          path6 = "/automotive&industrial/vehicles"
          link6 = "vehicles"
          path7 = "/automotive&industrial/yourgarage"
          link7 = "your-garage"
        />
    <div className="motorcycles-powersports__history-path">
    <Link to="/automotive&industrial">
          <p>
            go back
          </p>
        </Link>
    </div>
      <Building />
    </div>
  )
}

export default MotorcyclePowerSports
