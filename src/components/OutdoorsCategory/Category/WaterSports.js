import React from 'react';
import '../OutdoorsStyles/WaterSports.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function WaterSports() {
  return (
    <div className="water-sports__container">
      <div className="water-sports__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/watersports</p>
      </div>
      <Building />
    </div>
  )
}

export default WaterSports
