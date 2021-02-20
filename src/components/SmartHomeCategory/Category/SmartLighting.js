import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SmartLighting.scss';
import { Link } from 'react-router-dom';

function SmartLighting() {
  return (
  <div className="smart-lighting__container">
    <div className="smart-lighting__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/smarthome">
        <p>
          /smarthome
          </p>
      </Link>
      <p>/smartlighting</p>
    </div>
      <Building />
    </div>
  )
}

export default SmartLighting
