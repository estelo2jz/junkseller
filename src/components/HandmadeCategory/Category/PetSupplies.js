import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/PetSupplies.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function PetSupplies() {
  return (
    <div className="handmade-pet-supplies__container">
      <div className="handmade-pet-supplies__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/petsupplies</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default PetSupplies
