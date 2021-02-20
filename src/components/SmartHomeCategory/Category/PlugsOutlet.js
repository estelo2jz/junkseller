import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/PlugsOutlet.scss';
import { Link} from 'react-router-dom';

function PlugsOutlet() {
  return (
    <div className="plugs-outlet__container">
      <div className="plugs-outlet__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/plugs&outlet</p>
      </div>
      <Building />
    </div>
  )
}

export default PlugsOutlet
