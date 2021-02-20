import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SecurityCameras.scss';
import { Link} from 'react-router-dom';

function SecurityCameras() {
  return (
    <div className="security-cameras__container">
      <div className="security-cameras__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/securitycameras&systems</p>
      </div>
      <Building />
    </div>
  )
}

export default SecurityCameras
