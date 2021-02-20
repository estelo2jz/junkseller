import React from 'react';
import '../OutdoorsStyles/OutdoorSkates.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function Skates() {
  return (
    <div className="outdoor-skates__container">
      <div className="outdoor-skates__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/scooters&skates&skateboards</p>
      </div>
      <Building />
    </div>
  )
}

export default Skates
