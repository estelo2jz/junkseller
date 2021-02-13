import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/Mattresses.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function Mattresses() {
  return (
    <div className="mattresses__container">
      <div className="mattresses__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/mattresses</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Mattresses
