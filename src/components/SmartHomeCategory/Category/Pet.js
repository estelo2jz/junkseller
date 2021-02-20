import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/Pet.scss';
import { Link} from 'react-router-dom';

function Pet() {
  return (
    <div className="pet__container">
      <div className="pet__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/pet</p>
      </div>
      <Building />
    </div>
  )
}

export default Pet
