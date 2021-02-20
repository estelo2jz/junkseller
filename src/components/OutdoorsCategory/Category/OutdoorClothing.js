import React from 'react';
import { Link} from 'react-router-dom';
import '../OutdoorsStyles/OutdoorClothing.scss';
import Building from '../../Building'; 

function OutdoorClothing() {
  return (
    <div className="outdoor-clothing__container">
      <div className="outdoor-clothing__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/outdoorclothing</p>
      </div>
      <Building />
    </div>
  )
}

export default OutdoorClothing
