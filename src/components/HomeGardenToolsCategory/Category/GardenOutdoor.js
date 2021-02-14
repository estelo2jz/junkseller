import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/GardenOutdoor.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function GardenOutdoor() {
  return (
    <div className="garden-outdoor__container">
      <div className="garden-outdoor__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/garden&outdoor</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default GardenOutdoor
