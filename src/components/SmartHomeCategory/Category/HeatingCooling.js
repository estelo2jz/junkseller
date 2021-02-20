import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/HeatingCooling.scss';
import { Link} from 'react-router-dom';

function HeatingCooling() {
  return (
    <div className="heating-cooling__container">
      <div className="heating-cooling__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/heating&cooling</p>
      </div>
      <Building />
    </div>
  )
}

export default HeatingCooling
