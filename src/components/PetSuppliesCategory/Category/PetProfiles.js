import React from 'react';
import '../PetSuppliesStyles/PetProfiles.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function PetProfiles() {
  return (
    <div className="pet-profiles__container">
      <div className="pet-profiles__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/petprofiles</p>
      </div>
      <Building />
    </div>
  )
}

export default PetProfiles
