import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SmartHome2.scss';
import { Link} from 'react-router-dom';

function SmartHomeMain() {
  return (
    <div className="smart-home-two__container">
      <div className="smart-home-two__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/smarthome</p>
      </div>
      <Building />
    </div>
  )
}

export default SmartHomeMain
