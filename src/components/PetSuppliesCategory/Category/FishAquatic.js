import React from 'react';
import '../PetSuppliesStyles/FishAquatic.scss';
import Building from '../../Building'; 
import { Link} from 'react-router-dom';

function FishAquatic() {
  return (
    <div className="fish-aquatic__container">
      <div className="fish-aquatic__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/fishaquaticpets</p>
      </div>
      <Building />
    </div>
  )
}

export default FishAquatic
