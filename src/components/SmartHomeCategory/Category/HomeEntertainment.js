import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/HomeEntertainment.scss';
import { Link} from 'react-router-dom';

function HomeEntertainment() {
  return (
    <div className="home-entertainment__container">
      <div className="home-entertainment__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/homeentertainment</p>
      </div>
      <Building />
    </div>
  )
}

export default HomeEntertainment
