import React from 'react'
import Building from '../../Building'; 
import '../SmartHomeStyles/DetectorsSensors.scss';
import { Link} from 'react-router-dom';

function DetectorsSensors() {
  return (
    <div className="detectors-sensors__container">
      <div className="detectors-sensors__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/detectors&sensors</p>
      </div>
      <Building />
    </div>
  )
}

export default DetectorsSensors
