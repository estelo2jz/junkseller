import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/CollectiveFineArt.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function CollectiveFineArt() {
  return (
    <div className="collective-fine-art__container">
      <div className="collective-fine-art__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/collective&fineart</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default CollectiveFineArt
