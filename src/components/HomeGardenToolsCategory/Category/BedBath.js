import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/BedBath.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function BedBath() {
  return (
    <div className="bed-bath__container">
      <div className="bed-bath__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/bed&bath</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default BedBath
