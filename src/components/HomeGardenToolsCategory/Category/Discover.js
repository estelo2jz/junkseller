import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/Discover.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function Discover() {
  return (
    <div className="discover__container">
      <div className="discover__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/discover</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default Discover
