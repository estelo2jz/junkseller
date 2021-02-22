import React from 'react';
import '../OutdoorsStyles/CampingHiking.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from '../../JumpTo';

function CampingHiking() {
  return (
    <div className="camping-hiking__container">
          <JumpTo 
        path1 = "/outdoors/accessories"
        link1 = "/accessories"
        path2 = "/outdoors/climbing"
        link2 = "/climbing"
        path3 = "/outdoors/watersports"
        link3 = "/watersports"
        path4 = "/outdoors/scooters&skates&skateboards"
        link4 = "/scooters&skates&skateboards"
        path5 = "/outdoors/cycling"
        link5 = "/cycling"
        path6 = "/outdoors/alloutdoor"
        link6 = "/alloutdoor&recreation"
        path7 = "/outdoors/wintersports"
        link7 = "/wintersports"
        path8 = "/outdoors/outdoorclothing"
        link8 = "/outdoorclothing"
      />
      <div className="camping-hiking__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/camping&hiking</p>
      </div>
      <Building />
    </div>
  )
}

export default CampingHiking
