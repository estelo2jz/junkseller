import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/HomePetSupplies.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function HomePetSupplies() {
  return (
    <div className="home-pet-supplies__container">
      <div className="home-pet-supplies__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/petsupplies</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default HomePetSupplies
