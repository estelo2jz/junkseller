import React from 'react';
import { Link} from 'react-router-dom';
import '../OutdoorsStyles/OutdoorClothing.scss';
import Building from '../../Building'; 
import JumpTo from './JumpTo';

function OutdoorClothing() {
  return (
    <div className="outdoor-clothing__container">
          <JumpTo 
        path1 = "/outdoors/accessories"
        link1 = "accessories"
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
        path8 = "/outdoors/alloutdoor"
        link8 = "all-outdoor&recreation"
      />
      <div className="outdoor-clothing__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/outdoorclothing</p>
      </div>
      <Building />
    </div>
  )
}

export default OutdoorClothing
