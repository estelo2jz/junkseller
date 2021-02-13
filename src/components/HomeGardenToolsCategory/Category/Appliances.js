import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/Appliances.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function Appliances() {
  return (
    <div className="appliances__container">
      <div className="appliances__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/appliances</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Appliances
