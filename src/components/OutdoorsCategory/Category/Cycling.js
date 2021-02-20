import React from 'react';
import '../OutdoorsStyles/Cycling.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function Cycling() {
  return (
    <div className="cycling__container">
      <div className="cycling__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/cycling</p>
      </div>
      <Building />
    </div>
  )
}

export default Cycling
