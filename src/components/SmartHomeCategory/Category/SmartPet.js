import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SmartPet.scss';
import { Link } from 'react-router-dom';

function SmartPet() {
  return (
  <div className="smart-pet__container">
    <div className="smart-pet__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/smarthome">
        <p>
          /smarthome
          </p>
      </Link>
      <p>/smartpet</p>
    </div>
      <Building />
    </div>
  )
}

export default SmartPet
