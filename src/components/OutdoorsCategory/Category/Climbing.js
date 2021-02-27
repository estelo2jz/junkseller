import React from 'react';
import '../OutdoorsStyles/Climbing.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from './JumpTo';


function Climbing() {
  return (
    <div className="climbing__container">
          <JumpTo 
        path1 = "/outdoors/accessories"
        link1 = "accessories"
        path2 = "/outdoors/alloutdoor"
        link2 = "all-outdoor&recreation"
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
      <div className="climbing__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/climbing</p>
      </div>
      <Building />
    </div>
  )
}

export default Climbing
