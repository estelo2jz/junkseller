import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/ToolsEquipment.scss';
import { Link } from 'react-router-dom';

function ToolsEquipment() {
  return (
  <div className="tools-equipment__container">
    <div className="tools-equipment__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/tools&equipment</p>
    </div>
      <Building />
    </div>
  )
}

export default ToolsEquipment
