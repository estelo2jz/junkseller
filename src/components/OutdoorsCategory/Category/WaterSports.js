import React from 'react';
import '../OutdoorsStyles/WaterSports.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from './JumpTo';


function WaterSports() {
  return (
    <div className="water-sports__container">
          <JumpTo 
        path1 = "/outdoors/accessories"
        link1 = "accessories"
        path2 = "/outdoors/climbing"
        link2 = "climbing"
        path3 = "/outdoors/alloutdoor"
        link3 = "all-outdoor&recreation"
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
      <div className="water-sports__history-path">
      <Link to="/outdoors">
          <p>
            go back
          </p>
        </Link>
      </div>
      <Building />
    </div>
  )
}

export default WaterSports
