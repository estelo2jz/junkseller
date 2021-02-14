import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/AmazonHome.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function AmazonHome() {
  return (
    <div className="amazon-home__container">
      <div className="amazon-home__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/home</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default AmazonHome
