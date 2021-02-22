import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/Vehicles.scss';
import { Link } from 'react-router-dom';
import JumpTo from '../../JumpTo';

function Vehicles() {
  return (
  <div className="vehicles__container">
          <JumpTo 
          path1 = "/automotive&industrial/parts&accessories"
          link1 = "/parts&accessories"
          path2 = "/automotive&industrial/tools&equipment"
          link2 = "/tools&equipment"
          path3 = "/automotive&industrial/tires&wheels"
          link3 = "/tires&wheels"
          path4 = "/automotive&industrial/motorcycle&powersports"
          link4 = "/motorcycle&powersports"
          path5 = "/automotive&industrial/rvpart&accessories"
          link5 = "/rvpart&accessories"
          path6 = "/automotive&industrial/carelectronics&gps"
          link6 = "/carelectronics&gps"
          path7 = "/automotive&industrial/yourgarage"
          link7 = "/yourgarage"
        />
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
