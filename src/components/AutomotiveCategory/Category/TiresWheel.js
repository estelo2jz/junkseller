import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/TiresWheel.scss';
import { Link } from 'react-router-dom';

function TiresWheel() {
  return (
  <div className="tires-wheel__container">
    <div className="tires-wheel__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/tires&wheel</p>
    </div>
      <Building />
    </div>
  )
}

export default TiresWheel
