import React from 'react';
import { Link} from 'react-router-dom';
import '../OutdoorsStyles/OutdoorAccessories.scss';
import Building from '../../Building'; 

function OutdoorAccessories() {
  return (
    <div className="outdoor-accessories__container">
      <div className="outdoor-accessories__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/accessories</p>
      </div>
      <Building />
    </div>
  )
}

export default OutdoorAccessories
