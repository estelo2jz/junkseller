import React from 'react';
import { Link } from 'react-router-dom';
import '../OutdoorsStyles/AllOutdoor.scss';
import Building from '../../Building'; 
import JumpTo from '../../JumpTo';


function AllOutdoor() {
  return (
    <div className="all-outdoor__container">
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
        path6 = "/outdoors/camping&hiking"
        link6 = "/camping&hiking"
        path7 = "/outdoors/wintersports"
        link7 = "/wintersports"
        path8 = "/outdoors/outdoorclothing"
        link8 = "/outdoorclothing"
      />
      <div className="all-outdoor__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/outdoors">
          <p>
            /outdoors
          </p>
        </Link>
        <p>/alloutdoor</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default AllOutdoor;
