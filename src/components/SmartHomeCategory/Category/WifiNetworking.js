import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/WifiNetworking.scss';
import { Link } from 'react-router-dom';

function WifiNetworking() {
  return (
  <div className="wifi-networking__container">
    <div className="wifi-networking__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/smarthome">
        <p>
          /smarthome
          </p>
      </Link>
      <p>/wifi&networking</p>
    </div>
      <Building />
    </div>
  )
}

export default WifiNetworking
