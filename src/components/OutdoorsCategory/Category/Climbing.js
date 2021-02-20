import React from 'react';
import '../OutdoorsStyles/Climbing.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function Climbing() {
  return (
    <div className="climbing__container">
      <div className="climbing__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/climbing</p>
      </div>
      <Building />
    </div>
  )
}

export default Climbing
