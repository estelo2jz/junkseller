import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SmartLocks.scss';
import { Link } from 'react-router-dom';

function SmartLocks() {
  return (
  <div className="smart-locks__container">
    <div className="smart-locks__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/smarthome">
        <p>
          /smarthome
          </p>
      </Link>
      <p>/smartlocks</p>
    </div>
      <Building />
    </div>
  )
}

export default SmartLocks
