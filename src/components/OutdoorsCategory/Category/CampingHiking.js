import React from 'react';
import '../OutdoorsStyles/CampingHiking.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function CampingHiking() {
  return (
    <div className="camping-hiking__container">
      <div className="camping-hiking__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/camping&hiking</p>
      </div>
      <Building />
    </div>
  )
}

export default CampingHiking
