import React from 'react';
import { Link} from 'react-router-dom';
import '../OutdoorsStyles/OutdoorAccessories.scss';
import Building from '../../Building'; 
import JumpTo from './JumpTo';

function OutdoorAccessories() {
  return (
    <div className="outdoor-accessories__container">
          <JumpTo 
        path1 = "/outdoors/alloutdoor"
        link1 = "all-outdoor&recreation"
        path2 = "/outdoors/climbing"
        link2 = "climbing"
        path3 = "/outdoors/watersports"
        link3 = "water-sports"
        path4 = "/outdoors/scooters&skates&skateboards"
        link4 = "scooters&skateboards"
        path5 = "/outdoors/cycling"
        link5 = "cycling"
        path6 = "/outdoors/camping&hiking"
        link6 = "camping&hiking"
        path7 = "/outdoors/wintersports"
        link7 = "winter-sports"
        path8 = "/outdoors/outdoorclothing"
        link8 = "outdoor-clothing"
      />
      <div className="outdoor-accessories__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/accessories</p>
      </div>
      <Building />
    </div>
  )
}

export default OutdoorAccessories
