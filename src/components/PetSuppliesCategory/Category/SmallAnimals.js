import React from 'react';
import '../PetSuppliesStyles/SmallAnimals.scss';
import Building from '../../Building'; 
import { Link} from 'react-router-dom';

function SmallAnimals() {
  return (
    <div className="small-animals__container">
      <div className="small-animals__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/smallanimals</p>
      </div>
      <Building />
    </div>
  )
}

export default SmallAnimals
