import React from 'react';
import Building from '../../Building';
import '../AutomotiveStyles/PartsAccessories.scss';
import { Link } from 'react-router-dom';

function PartsAccessories() {
  return (
  <div className="parts-accessories__container">
    <div className="parts-accessories__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/automotive&industrial">
        <p>
          /automotive&industrial
            </p>
      </Link>
      <p>/parts-accessories</p>
    </div>
      <Building />
    </div>
  )
}

export default PartsAccessories
