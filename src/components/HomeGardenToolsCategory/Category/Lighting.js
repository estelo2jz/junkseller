import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/Lighting.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function Lighting() {
  return (
    <div className="lighting__container">
      <div className="lighting__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/lighting</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Lighting
