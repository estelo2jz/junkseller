import React from 'react';
import '../OutdoorsStyles/WinterSports.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from './JumpTo';


function WinterSports() {
  return (
    <div className="winter-sports__container">
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
        path7 = "/outdoors/alloutdoor"
        link7 = "all-outdoor&recreation"
        path8 = "/outdoors/outdoorclothing"
        link8 = "outdoor-clothing"
      />
      <div className="winter-sports__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/wintersports</p>
      </div>
      <Building />
    </div>
  )
}

export default WinterSports
