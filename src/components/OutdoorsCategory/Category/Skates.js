import React from 'react';
import '../OutdoorsStyles/OutdoorSkates.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from './JumpTo';

function Skates() {
  return (
    <div className="outdoor-skates__container">
          <JumpTo 
        path1 = "/outdoors/accessories"
        link1 = "accessories"
        path2 = "/outdoors/climbing"
        link2 = "climbing"
        path3 = "/outdoors/watersports"
        link3 = "water-sports"
        path4 = "/outdoors/salloutdoor"
        link4 = "all-outdoor&recreation"
        path5 = "/outdoors/cycling"
        link5 = "cycling"
        path6 = "/outdoors/camping&hiking"
        link6 = "camping&hiking"
        path7 = "/outdoors/wintersports"
        link7 = "winter-sports"
        path8 = "/outdoors/outdoorclothing"
        link8 = "outdoor-clothing"
      />
      <div className="outdoor-skates__history-path">
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

export default Skates
