import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/Kitchen.scss';
import { Link} from 'react-router-dom';

function Kitchen() {
  return (
    <div className="kitchen__container">
      <div className="kitchen__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/kitchen</p>
      </div>
      <Building />
    </div>
  )
}

export default Kitchen
