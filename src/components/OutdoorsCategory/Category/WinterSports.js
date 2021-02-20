import React from 'react';
import '../OutdoorsStyles/WinterSports.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function WinterSports() {
  return (
    <div className="winter-sports__container">
      <div className="winter-sports__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/wintersports</p>
      </div>
      <Building />
    </div>
  )
}

export default WinterSports
