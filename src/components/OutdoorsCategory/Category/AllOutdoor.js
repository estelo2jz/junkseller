import React from 'react';
import { Link } from 'react-router-dom';
import '../OutdoorsStyles/AllOutdoor.scss';
import Building from '../../Building'; 

function AllOutdoor() {
  return (
    <div className="all-outdoor__container">
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
