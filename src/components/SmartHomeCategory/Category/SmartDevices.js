import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SmartDevices.scss';
import { Link} from 'react-router-dom';

function SmartDevices() {
  return (
    <div className="smart-devices__container">
      <div className="smart-devices__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/smartdevices</p>
      </div>
      <Building />
    </div>
  )
}

export default SmartDevices
