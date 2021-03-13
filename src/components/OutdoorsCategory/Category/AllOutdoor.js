import React from 'react';
import { Link } from 'react-router-dom';
import '../OutdoorsStyles/AllOutdoor.scss';
import Building from '../../Building'; 
import JumpTo from './JumpTo';


function AllOutdoor() {
  return (
    <div className="all-outdoor__container">
      <JumpTo 
        path1 = "/outdoors/accessories"
        link1 = "accessories"
        path2 = "/outdoors/climbing"
        link2 = "climbing"
        path3 = "/outdoors/watersports"
        link3 = "water-sports"
        path4 = "/outdoors/scooters&skateboards"
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
      <div className="all-outdoor__history-path">
        <Link to="/outdoors">
          <p>
            go back
          </p>
        </Link>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default AllOutdoor;
