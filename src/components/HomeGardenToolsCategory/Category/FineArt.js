import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/FineArt.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function FineArt() {
  return (
    <div className="fine-art__container">
      <div className="fine-art__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/fineart</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default FineArt
