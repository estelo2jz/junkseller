import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SmartVacuums.scss';
import { Link } from 'react-router-dom';

function SmartVacuums() {
  return (
  <div className="smart-vacuums__container">
    <div className="smart-vacuums__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/smarthome">
        <p>
          /smarthome
          </p>
      </Link>
      <p>/vacuums&mops</p>
    </div>
      <Building />
    </div>
  )
}

export default SmartVacuums
