import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/Garage.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';


function Garage() {
  return (
  <div className="garage__container">
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
          link5 = "r-vpart&accessories"
          path6 = "/automotive&industrial/vehicles"
          link6 = "vehicles"
          path7 = "/automotive&industrial/carelectronics&gps"
          link7 = "car-electronics&gps"
        />
    <div className="garage__history-path">
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

export default Garage
