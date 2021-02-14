import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/ExploreShowroom.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function ExploreShowroom() {
  return (
    <div className="explore-showroom__container">
      <div className="explore-showroom__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/exploreshowroom</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default ExploreShowroom
