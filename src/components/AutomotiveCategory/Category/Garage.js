import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/Garage.scss';
import { Link } from 'react-router-dom';

function Garage() {
  return (
  <div className="garage__container">
    <div className="garage__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/garage</p>
    </div>
      <Building />
    </div>
  )
}

export default Garage
