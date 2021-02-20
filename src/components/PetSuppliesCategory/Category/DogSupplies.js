import React from 'react';
import '../PetSuppliesStyles/DogSupplies.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function DogSupplies() {
  return (
    <div className="dog-supplies__container">
      <div className="dog-supplies__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/dogsupplies</p>
      </div>
      <Building />
    </div>
  )
}

export default DogSupplies
