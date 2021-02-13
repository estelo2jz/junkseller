import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/ArtsCrafts.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function ArtsCrafts() {
  return (
    <div className="arts-crafts__container">
      <div className="arts-crafts__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/artscrafts&sewing</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default ArtsCrafts
