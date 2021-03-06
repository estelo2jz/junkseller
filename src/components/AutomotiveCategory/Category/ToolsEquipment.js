import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/ToolsEquipment.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function ToolsEquipment() {
  return (
  <div className="tools-equipment__container">
          <JumpTo 
          path1 = "/automotive&industrial/parts&accessories"
          link1 = "parts&accessories"
          path2 = "/automotive&industrial/carelectronics&gps"
          link2 = "car-electronics&gps"
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
    <div className="tools-equipment__history-path">
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

export default ToolsEquipment
