import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/PartsAccessories.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function PartsAccessories() {
  return (
  <div className="parts-accessories__container">
          <JumpTo 
          path1 = "/automotive&industrial/carelectronics&gps"
          link1 = "car-electronics&gps"
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
    <div className="parts-accessories__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/parts-accessories</p>
    </div>
      <Building />
    </div>
  )
}

export default PartsAccessories
